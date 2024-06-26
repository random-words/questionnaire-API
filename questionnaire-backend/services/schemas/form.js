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
    user: {
      immutable: true,
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    // toJSON: { virtuals: true },
  }
);

// form.virtual("User", {
//   ref: "User",
//   localField: "id",
//   foreignField: "id",
// });

const Form = mongoose.model("Form", form);

module.exports = Form;
