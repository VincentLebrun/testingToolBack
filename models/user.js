//import tools
const mongoose = require("mongoose");

//call import to create model via mongoose
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: Number,
  firstname: String,
  lastname: String,
  mail: String,
  password: String,
});

//creation of model user
const User = mongoose.model("User", UserSchema);

module.exports = User;
