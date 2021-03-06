// import models
const User = require("../models/user");

module.exports = {
  getAll(req, res) {
    User.find().then((users) => {
      res.send(users);
    });
  },
  //get user
  get(req, res) {
    const id = req.params.id;
    User.findById(id).then((user) => {
      res.send(user);
    });
  },
  //User controllers create
  create(req, res) {
    console.log(req.body);
    User.find({ mail: req.body.mail })
      .exec()
      .then((user) => {
        if (user.length >= 1)
          return res.status(409).json({
            message: "Mail exist",
          });
        else {
          const user = new User({
            id: req.body.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mail: req.body.mail,
            password: req.body.password,
          });
          user.save().then(() => {
            res.send({
              result: `Création de l'utilisateur ${user.firstname}`,
            });
          });
        }
      });
  },
};
