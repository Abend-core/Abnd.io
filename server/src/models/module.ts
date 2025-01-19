import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../database/db";

interface UserAttributes {
  id: number;
  name: string;
  link: string;
  color: string;
  image: string;
  description: string;
  isShow: boolean;
  user_id: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class Module
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public link!: string;
  public color!: string;
  public image!: string;
  public description!: string;
  public isShow!: boolean;
  public user_id!: string;
}

Module.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Le nom du module ne doit pas être null.",
        },
        notEmpty: {
          msg: "Le nom du module ne doit pas être vide.",
        },
        len: {
          args: [1, 255],
          msg: "Trop de caractères, 255 maximum.",
        },
      },
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Le lien du module ne doit pas être null.",
        },
        notEmpty: {
          msg: "Le lien du module ne doit pas être vide.",
        },
        len: {
          args: [1, 255],
          msg: "Trop de caractères, 255 maximum.",
        },
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "La couleur du module ne doit pas être null.",
        },
        notEmpty: {
          msg: "La couleur du module ne doit pas être vide.",
        },
        len: {
          args: [1, 255],
          msg: "Trop de caractères, 255 maximum.",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "L'image du module ne doit pas être null.",
        },
        notEmpty: {
          msg: "L'image du module ne doit pas être vide.",
        },
        len: {
          args: [1, 255],
          msg: "Trop de caractères, 255 maximum.",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {},
    },
    isShow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Module",
    tableName: "Modules",
  }
);

export default Module;
