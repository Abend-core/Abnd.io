//Tools
import UUID from "../tools/uuid";
import fs from "fs";
import path from "path";
import Redis, {KEYS} from "../tools/redis";
//Model & bdd
import { Module, moduleCreationAttributes } from "../models/module";
import Like from "../models/liked";
import Visited from "../models/visited";
import { User } from "../models/user";
import { Op } from "sequelize";
import redis from "../tools/redis";

interface ModuleWithFavoris extends Module {
    favoris: boolean;
}

class ModuleController {
    async add(data: moduleCreationAttributes, file: Express.Multer.File) {
        data.id = UUID.v7();
        data.isShow = true;
        data.image = file.filename;
        if (!file) {
            throw new Error("Bad request.");
        }
        const message = await this.#checkLink(data.link);
        if (message != "ok") {
            const fileDelete = path.join("./src/uploads/module/", data.image);
            fs.promises.unlink(fileDelete);
            throw new Error("Bad request.");
        }
        await Module.create(data);
        return;
    }

    async update(moduleId: string, data: moduleCreationAttributes) {
        const module = await Module.findByPk(moduleId);
        if (!module) {
            throw new Error("Bad request.");
        }
        await Module.update(data, {
            where: { id: moduleId },
        });
        Redis.deleteCache(KEYS.modules)
        return;
    }

    async getAll() {
        const cache = await Redis.getCache(KEYS.modules);
        if (cache) {
            console.log("Données récupérées depuis le cache");
            return cache;
        }
        const modules = await Module.findAll({
            include: [
                {
                    model: User,
                    as: "User",
                    attributes: ["id", "username", "isAdmin"],
                },
            ],
            raw: true,
        });
        
        Redis.setCache(KEYS.modules, modules)
        return modules;
    }

    async showAdmin() {
        const modules = await this.getAll();

        const moduleAdmin = modules.filter(
            (module: Module) => module.User.isAdmin === true
        );
        return moduleAdmin;
    }

    async getModule(userId: string) {
        const modules = await Module.findAll({ where: { user_id: userId } });
        return modules;
    }

    async show(userId: string) {
        
        console.log("Je suis dans le controlleur show")
        console.log("Controlleur | UserId : ", userId)
        const modules = await this.getAll();
        console.log("Controlleur | Modules : ", modules)
        const moduleShow = modules.filter((module: Module) => module.isShow == true);
        console.log("Controlleur | Module show : ", moduleShow)
        const modulesId = moduleShow.map((module: Module) => module.id);
        console.log("Controlleur | Modules ID : ", modulesId)
        const likedModules = await Like.findAll({
            where: {
                ModuleId: modulesId,
                UserId: userId,
            },
            attributes: ["ModuleId"],
        });
        console.log("Controlleur | LikedModules : ", likedModules)
        const likedModuleIds = new Set(
            likedModules.map((like) => like.ModuleId)
        );
        console.log("Controlleur | set avec LikedModuleIds : ", likedModuleIds)
        const formattedModules = modules.map((module: Module) => ({
            ...module,
            favoris: likedModuleIds.has(module.id.toString()),
        }));
        console.log("Controlleur | Modules, formater : ", formattedModules)
        return formattedModules;
    }

    async hide(userId: string) {
        const modules = await this.getAll();
        const moduleHide = modules.filter((module: Module) => module.isShow == false);

        const modulesId = moduleHide.map((module: Module) => module.id);

        const likedModules = await Like.findAll({
            where: {
                ModuleId: modulesId,
                UserId: userId,
            },
            attributes: ["ModuleId"],
        });
        const likedModuleIds = new Set(
            likedModules.map((like) => like.ModuleId)
        );
        const formattedModules = modules.map((module: Module) => ({
            ...module.toJSON(),
            favoris: likedModuleIds.has(module.id.toString()),
        }));
        return formattedModules;
    }

    async toggleLike(userId: string, ModuleId: string) {
        const result = await Like.findOne({
            where: { UserId: userId, ModuleId: ModuleId },
        });
        if (result) {
            this.#deleteLike(userId, ModuleId);
            return;
        }
        this.#addLike(userId, ModuleId);
    }

    async toggleView(userId: string, ModuleId: string) {
        const result = await Visited.findOne({
            where: { UserId: userId, ModuleId: ModuleId },
        });
        if (result) {
            this.#deleteView(userId, ModuleId);
            return;
        }
        this.#addView(userId, ModuleId);
    }

    async moduleLikeByUser(userId: string) {
        const modules = await this.show(userId);
        const likedModules = modules.filter((module: ModuleWithFavoris) => module.favoris == true);
        return likedModules;
    }

    async getUserData(userName: string) {
        const user = await User.findOne({ 
            attributes: { exclude: ['password'] },
            where: { username: userName } 
        });

        if (!user) {
            throw new Error("User not found");
        }
        const userId = user?.id;
        const [ModuleUser, FavorisUser] = await Promise.all([
            this.getModule(userId),
            this.moduleLikeByUser(userId),
        ]);
        return { user, ModuleUser, FavorisUser };
    }

    async filtre(search: string) {
        const modules = Module.findAll({
            include: [
                {
                    model: User,
                    as: "User",
                    attributes: ["username", "isAdmin"],
                },
            ],
            where: {
                [Op.or]: [
                    { name: { [Op.like]: "%" + search + "%" } },
                    { "$User.username$": { [Op.like]: "%" + search + "%" } },
                ],
            },
        });
        return modules;
    }

    async delete(moduleId: string) {
        const module = await Module.findByPk(moduleId);
        if (!module) {
            return;
        }
        const dataModule = module.get();
        const fileDelete = path.join("./src/uploads/module/", dataModule.image);
        fs.promises.unlink(fileDelete);
        await Module.destroy({ where: { id: moduleId } });
        Redis.deleteCache(KEYS.modules)
    }

    #deleteView(UserId: string, ModuleId: string) {
        Visited.destroy({
            where: { UserId: UserId, ModuleId: ModuleId },
        });
        Module.decrement("views", { where: { id: ModuleId } });
    }

    #addView(UserId: string, ModuleId: string) {
        Visited.create({ UserId: UserId, ModuleId: ModuleId });
        Module.increment("views", { where: { id: ModuleId } });
    }

    #deleteLike(UserId: string, ModuleId: string) {
        Like.destroy({
            where: { UserId: UserId, ModuleId: ModuleId },
        });
        Module.decrement("likes", { where: { id: ModuleId } });
    }

    #addLike(UserId: string, ModuleId: string) {
        Like.create({ UserId: UserId, ModuleId: ModuleId });
        Module.increment("likes", { where: { id: ModuleId } });
    }

    #checkLink(link: string): string {
        let message: string = "ok";
        if (link.includes("https://") == false) {
            message = "Le lien n'est pas au bon format.";
            return message;
        }
        const parts = link.split("//");
        if (parts[0] != "https:") {
            message = "Le lien n'est pas au bon format.";
            return message;
        }

        const domainExtension = parts[1];
        const split = domainExtension.split(".");
        for (let i = 0; i < split.length - 1; i++) {
            message = this.#blackList(split[i]);
        }
        if (message != "ok") {
            return message;
        }
        message = this.#goodList(split[split.length - 1]);

        return message;
    }

    #goodList(text: string): string {
        const listeExtension: Array<string> = [
            "fr",
            "com",
            "org",
            "app",
            "net",
            "pt",
            "es",
            "pro",
            "de",
            "ru",
            "ir",
            "in",
            "uk",
            "au",
            "ua",
            "tv",
            "de",
            "online",
            "info",
            "eu",
            "tk",
            "cn",
            "xyz",
            "site",
            "top",
            "icu",
        ];

        const containsExtension = listeExtension.some((extension) =>
            text.includes(extension)
        );
        if (!containsExtension) {
            return "Le lien n'est pas au bon format.";
        }

        return "ok";
    }

    #blackList(text: string): string {
        const listeDomaine: Array<string> = [
            "porn",
            "porno",
            "sexe",
            "adult",
            "xxx",
            "sex",
            "onlyfans",
            "escort",
            "camgirl",
            "casino",
            "gambling",
            "bet",
            "poker",
            "ads",
        ];
        // Construire une expression régulière pour détecter des mots interdits
        const regex = new RegExp(`\\b(${listeDomaine.join("|")})\\b`, "i");

        // Vérifier si le texte correspond à la liste des mots interdits
        if (regex.test(text)) {
            return "Le lien n'est pas au bon format.";
        }

        return "ok";
    }
}

export default new ModuleController();
