import { Sequelize } from "sequelize";
import logger from "../tools/logger";

//Instanciation de la bdd
const sequelize = new Sequelize("abend-core", "root", "root", {
  host: "Abend-sql",
  port: 3306,
  dialect: "mysql",
  logging: (msg) => {
    msg = msg.split(":")[1].trim();
    logger.info(msg);
  },
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Vous êtes connecté à la base de donnée");
  } catch (error) {
    console.error("Erreur de connection", error);
  }
}

//Test si la connection c'est bien effectué.
connect();

//Export de l'instance de bdd, afin de l'utilisé dans d'autre fichier.
export default sequelize;
