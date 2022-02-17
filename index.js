//import tools
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const cors = require("cors");
//import routes
const routes = require("./routes/index");

//UseServer
server.use(cors());
server.use(express.json());
routes(server);

//listeningServer
server.listen(4000, () => {
  console.log("Ecoute sur le port 4000");
  mongoose.connect("mongodb://localhost/backtest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection
    .once("open", () => console.log("Connexion à MongoDB ok"))
    .on("error", (error) =>
      console.warn("Problème durant la connexion", error)
    );
});
