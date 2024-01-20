const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: null,
    },
    sex: {
      type: String,
      default: null,
    },
    hospital: {
      type: String,
      default: null,
    },
    speciality: {
      type: String,
      required: true,
    },
    years: {
      type: Number,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);