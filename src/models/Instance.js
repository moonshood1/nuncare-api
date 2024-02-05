const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const INSTANCE_TYPE = {
  HOSPITAL: "hospital",
  PHARMACY: "pharmacy",
};

const InstanceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: [INSTANCE_TYPE.HOSPITAL, INSTANCE_TYPE.PHARMACY],
      defaukt: null,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    position: {
      lng: {
        type: String,
        required: true,
      },
      lat: {
        type: String,
        required: true,
      },
    },
    phone: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Instance", InstanceSchema);
