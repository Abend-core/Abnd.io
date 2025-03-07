import { DataTypes, Model, Optional, Sequelize } from "sequelize";
interface UserAttributes {
    id?: string;
    username: string;
    mail: string;
    image?: string;
    password?: string;
    content?: string;
    isAdmin?: boolean;
    isActive?: boolean;
    token?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface userCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
    extends Model<UserAttributes, userCreationAttributes>
    implements UserAttributes
{
    public id!: string;
    public username!: string;
    public mail!: string;
    public image!: string;
    public password!: string;
    public content!: string;
    public isAdmin!: boolean;
    public isActive!: boolean;
    public isFollow!: boolean;
    public token!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public static initialize(sequelize: Sequelize) {
        User.init(
            {
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    primaryKey: true,
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: {
                        name: "unique_username",
                        msg: "Cet identifiant est déjà utilisé.",
                    },
                    validate: {
                        notNull: {
                            msg: "L'identifiant ne doit pas être nul.",
                        },
                        notEmpty: {
                            msg: "L'identifiant ne doit pas être vide.",
                        },
                        len: {
                            args: [1, 13],
                            msg: "Trop de caractères, 13 maximum.",
                        },
                    },
                },
                mail: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        notNull: {
                            msg: "L'email ne doit pas être nul.",
                        },
                        notEmpty: {
                            msg: "L'email ne doit pas être vide.",
                        },
                        isEmail: {
                            msg: "L'email n'est pas en format mail.",
                        },
                        len: {
                            args: [1, 255],
                            msg: "Trop de caractères, 255 maximum.",
                        },
                    },
                },
                image: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    validate: {},
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        notNull: {
                            msg: "Le mot de passe ne doit pas être nul.",
                        },
                        notEmpty: {
                            msg: "Le mot de passe ne doit pas être vide.",
                        },
                        len: {
                            args: [8, 64],
                            msg: "Le mot de passe doit contenir [8 à 64] caractères.",
                        },
                    },
                },
                content: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    validate: {
                        len: {
                            args: [0, 200],
                            msg: "La description ne dois pas dépasser plus de 200 caractères",
                        },
                    },
                },
                isAdmin: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
                isActive: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
                token: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
            },
            {
                sequelize,
                modelName: "User",
                tableName: "Users",
            }
        );
    }
    public static setupAssociations() {
        // Pas d'associations pour ce modèle
    }
}
export { User, userCreationAttributes };
