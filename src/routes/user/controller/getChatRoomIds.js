const ChatRoom = require("../../../models/ChatRoom");

const getChatRoomIds = async ({ user }, res, next) => {
  try {
    const result = await ChatRoom.find({ userId: user._id });

    const ids = result.map((room) => room.receiverId);

    return res.status(200).json({ success: true, ids });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getChatRoomIds,
};
