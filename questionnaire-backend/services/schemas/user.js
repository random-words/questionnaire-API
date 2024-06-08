const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
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
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// ВОТ як можна прописати валідацію даних, як надходять!! (можливо, перенести в контроллери)
user.methods.validateData = function (data) {};

const User = mongoose.model("User", user);

module.exports = User;
