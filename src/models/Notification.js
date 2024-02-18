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
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        users: {
            type: Array,
            default: [],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Notification", NotificationSchema);
