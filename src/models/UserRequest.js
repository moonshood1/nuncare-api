const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const REQUEST_STATUSES = {
  PENDING: "PENDING",
  TREATED: "TREATED",
};

const UserRequestSchema = new Schema(
  {
    description: {
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
      default: REQUEST_STATUSES.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserRequest", UserRequestSchema);
module.exports = { REQUEST_STATUSES };
