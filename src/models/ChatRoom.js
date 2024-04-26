const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChatRoomSchema = new Schema(
  {
    chatRoomId: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ChatRoom", ChatRoomSchema);
