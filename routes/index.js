//Import tools

//Import models

//export model
module.exports = (server) => {
  //User Create
  server.post("/users", async (req, res) => {
    UserController.create(req, res);
  });
};
