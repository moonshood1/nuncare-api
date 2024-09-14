const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PharmacySchema = new Schema(
  {
    area: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: "",
      required: false,
    },
    lng: {
      type: Number,
      default: 0,
    },
    lat: {
      type: Number,
      default: 0,
    },
    phone: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    owner: {
      type: String,
      required: false,
      default: "",
    },
    isGuard: {
      type: Boolean,
      required: true,
      default: false,
    },
    guardPeriod: {
      type: Date,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pharmacy", PharmacySchema);
