//Tools
import Crypt from "../tools/hash";
import UUID from "../tools/uuid";
import jwt from "jsonwebtoken";
import privateKey from "../middlewares/auth/key";
import config from "config";
const imageCount: number = config.get("storage.nombreImageBanque");

//Modele & bdd
import { User, userCreationAttributes } from "../models/user";
import { sendVerificationEmail } from "../tools/email";

class AuthController {
    async register(userData: userCreationAttributes) {
        userData.id = UUID.v7();
        userData.isAdmin = false;
        userData.isBanned = false;
        if (!userData.image) {
            userData.image = `bank-img-${Math.trunc(
                Math.random() * imageCount
            )}.png`;
        }

        const user = await User.create(userData);
        user.password = await Crypt.hash(user.password);

        await User.update(
            { password: user.password },
            { where: { id: user.id }, validate: false }
        );

        await sendVerificationEmail(userData.mail);
    }

    async signin(userData: userCreationAttributes) {
        const user = await User.findOne({
            where: { mail: userData.mail },
        });

        const token = jwt.sign({ userId: user!.id }, privateKey, {
            expiresIn: "1h",
        });
        return {
            UUID: user!.id,
            token,
        };
    }
}

export default new AuthController();
