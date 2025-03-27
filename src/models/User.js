const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KYC_STATUSES = {
  NOT_STARTED: "NOT_STARTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  APPROVED: "APPROVED",
};

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
    isPhoneHidden: {
      type: Boolean,
      default: false,
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
    isOrderNumberHidden: {
      type: Boolean,
      default: false,
    },
    deviceId: {
      type: String,
      default: "",
    },
    promotion: {
      type: String,
      default: "",
    },
    kycStatus: {
      type: String,
      default: KYC_STATUSES.NOT_STARTED,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
module.exports = { KYC_STATUSES };
