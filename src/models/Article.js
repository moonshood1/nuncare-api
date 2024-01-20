const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",

      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", ArticleSchema);
