const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KYC_STATUSES = {
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  APPROVED: "APPROVED",
};

const VerificationSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    documentNumber: {
      type: String,
      required: true,
    },
    documentType: {
      type: String,
      required: true,
    },
    recto: {
      type: String,
      required: true,
    },
    verso: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      default: KYC_STATUSES.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Verification", VerificationSchema);
