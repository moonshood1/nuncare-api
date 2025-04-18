const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PharmaCodeSchema = new Schema(
  {
    code: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PharmaCode", PharmaCodeSchema);
