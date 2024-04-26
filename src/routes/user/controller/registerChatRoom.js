const ChatRoom = require("../../../models/ChatRoom");

const registerChatRoom = async ({ body, user }, res, next) => {
  try {
    const chatRoomExists = await ChatRoom.findOne({
      chatRoomId: body.chatRoomId,
      userId: user._id,
      receiverId: body.receiverId,
    });

    if (chatRoomExists) {
      return res.status(200).json({ success: true });
    }

    await ChatRoom.create({
      chatRoomId: body.chatRoomId,
      userId: user._id,
      receiverId: body.receiverId,
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
