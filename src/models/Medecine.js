const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MedecineSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    dci: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    regime: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Medecine", MedecineSchema);
