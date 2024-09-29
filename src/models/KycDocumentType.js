const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KycDocumentTypeSchema = new Schema(
  {
    name: {
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

module.exports = mongoose.model("KycDocumentType", KycDocumentTypeSchema);
