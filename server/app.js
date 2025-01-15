const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const port = process.env.PORT || 5000;
const cors = require("cors");
let corsOptions;

//Appel des models et les jointures
require("./src/database/join");
//Initialisation de la bdd
require("./src/database/init");

if (port == 5000) {
  corsOptions = {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5000",
      "http://127.0.0.1:5500",
    ],
    methods: ["GET", "HEAD", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "role"],
    maxAge: 3000,
  };
} else {
  corsOptions = {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5000",
      "http://127.0.0.1:5500",
    ],
    methods: ["GET", "HEAD", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "role"],
    maxAge: 3000,
  };
}

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

const auth = require("./src/routes/auth");
app.use("/auth", auth);

const users = require("./src/routes/user");
app.use("/users", users);

const modules = require("./src/routes/module");
app.use("/modules", modules);

const upload = require("./src/routes/upload");
app.use("/upload", upload);

app.get("/", (req, res) => {
  res.send("Hello ped !");
});

// Charger la spécification Swagger à partir du fichier YAML
const swaggerDocument = YAML.load("./docs/swagger.yaml");

// Utiliser Swagger UI pour rendre la documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/uploadsFile/module", express.static("./src/upload/module"));
app.use("/uploadsFile/profil", express.static("./src/upload/profil"));

app.listen(port, () => {
  console.log("Serveur en ligne !");
});
