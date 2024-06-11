const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    // (батьківський елемент)
    // створюєм айдішник юзеру(для передачі його в анкету,
    // шоб вона посилалася на цього юзера)
    // _id: {
    //   type: Schema.Types.ObjectId,
    // },
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

const User = mongoose.model("User", user);

module.exports = User;
