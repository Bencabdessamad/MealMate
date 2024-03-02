const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.oku1ezb.mongodb.net/")
    .then(() => {
        console.log("Connexion à la base de données établie");
    })
    .catch((error) => {
        console.log(`Erreur lors de la connexion à la base de données : ${error}`);
    });

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
