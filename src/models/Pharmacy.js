const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PharmacySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    region: {
      type: Schema.Types.ObjectId,
      ref: "Region",
      required: true,
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    lng: {
      type: String,
      default: 0,
    },
    lat: {
      type: String,
      default: 0,
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

module.exports = mongoose.model("Pharmacy", PharmacySchema);
