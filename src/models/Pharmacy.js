const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PharmacySchema = new Schema(
  {
    code: {
      type: String,
      required: false,
    },
    area: {
      type: String,
      required: false,
    },
    section: {
      type: String,
      required: false,
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
      required: false,
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
      required: false,
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
