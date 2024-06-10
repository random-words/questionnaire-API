const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const usersForms = new Schema(
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
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UsersForms = mongoose.model("UsersForms", usersForms);

module.exports = UsersForms;
