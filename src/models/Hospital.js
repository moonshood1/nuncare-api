const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    lng: {
      type: String,
      required: true,
    },
    lat: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hospital", HospitalSchema);
