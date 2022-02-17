//Import tools
const UserController = require("../controllers/user");
//Import models

//export model
module.exports = (server) => {
  //User Create
  server.get("/users", (req, res) => {
    UserController.getAll(req, res);
  });
  server.get("/users/:id", (req, res) => {
    UserController.get(req, res);
  });
  server.post("/users", async (req, res) => {
    UserController.create(req, res);
  });
};
