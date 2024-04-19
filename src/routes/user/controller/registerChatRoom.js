const ChatRoom = require("../../../models/ChatRoom");

const registerChatRoom = async ({ body, user }, res, next) => {
  try {
    await ChatRoom.create({
      chatRoomId: body.chatRoomId,
      userId: user._id,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  registerChatRoom,
};
