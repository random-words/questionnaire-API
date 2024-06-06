const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: {
    type: String,
    minlength: 3,
    maxlength: 12,
    required: true,
  },
  email: {
    type: String,
    minlength: 12,
    maxlength: 24,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 3,
    maxlength: 24,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("user", user);

module.exports = User;
