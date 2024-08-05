const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firebaseId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      default: "",
    },
    region: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    hospital: {
      type: String,
      default: "",
    },
    speciality: {
      type: String,
      default: "",
    },
    specialities: {
      type: Array,
      default: [],
    },
    university: {
      type: String,
      default: "",
    },
    countryUniversity: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    lat: {
      type: Number,
      default: 0,
    },
    lng: {
      type: Number,
      default: 0,
    },
    years: {
      type: Number,
      default: 0,
    },
    bio: {
      type: String,
      default: "",
    },
    sex: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    orderNumber: {
      type: String,
      default: "",
    },
    deviceId: {
      type: String,
      default: "",
    },
    promotion: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
