//import tools
const express = require("express");
const mongoose = require("mongoose");
const server = express();

//import routes
const routes = require("./routes/index");

//UseServer
server.use(express.json());
routes(server);

//listeningServer
server.listen(4000, () => {
  console.log("Ecoute sur le port 4000");
  mongoose.connection
    .once("open", () => console.log("Connexion à MongoDB ok"))
    .on("error", (error) =>
      console.warn("Problème durant la connexion", error)
    );
});
