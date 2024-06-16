const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    websiteLink: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ad", AdSchema);
