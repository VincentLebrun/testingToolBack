//Import tools
const UserController = require("../controllers/user");
//Import models

//export model
module.exports = (server) => {
  //User Create
  server.get("/user", (req, res) => {
    UserController.getAll(req, res);
  });
  server.get("/user/:id", (req, res) => {
    UserController.get(req, res);
  });
  server.post("/user", async (req, res) => {
    UserController.create(req, res);
  });
};
