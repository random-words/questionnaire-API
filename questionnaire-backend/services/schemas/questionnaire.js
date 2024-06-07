const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionnaire = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: String,
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

const Questionnaire = mongoose.model("Questionnaire", questionnaire);

module.exports = Questionnaire;
