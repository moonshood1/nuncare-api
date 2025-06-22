const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NotificationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      default: [],
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", NotificationSchema);
