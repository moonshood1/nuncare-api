const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InfoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      default: [],
    },
    link: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Info", InfoSchema);
