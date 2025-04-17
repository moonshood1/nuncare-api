const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DELETION_STATUSES = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
};

const DeletionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: DELETION_STATUSES.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AccountDeletion", DeletionSchema);
