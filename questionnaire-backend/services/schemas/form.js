const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const form = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
    // (дочірній елемент)
    // робим референс на юзера, з таким-то айдішником
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Form = mongoose.model("Form", form);

module.exports = Form;
