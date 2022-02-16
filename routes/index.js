//Import tools
const UserController = require("../controllers/user");
//Import models

//export model
module.exports = (server) => {
  //User Create
  server.post("/user", async (req, res) => {
    UserController.create(req, res);
  });
  server.get("/user", async (req, res) => {
    UserController.get(req, res);
  });
};
