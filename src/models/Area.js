const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AreaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    section: {
      type: Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Area", AreaSchema);
