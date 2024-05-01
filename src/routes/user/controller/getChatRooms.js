const ChatRoom = require("../../../models/ChatRoom");
const admin = require("firebase-admin");
const _ = require("lodash");

const getChatRooms = async ({ body, user }, res, next) => {
  try {
    // recuperer tous les chat_rooms de l'utilisateurs

    const result = await ChatRoom.find({ userId: user._id });

    if (_.isEmpty(result) || !result)
      return res.status(200).json({ success: true, chats: [] });

    const ids = result.map((room) => room.chatRoomId);

    const chats = [];

    // pour chaque chat_room_id ; faire un appel vers firebase

    for (let i = 0; i < ids.length; i++) {
      const db = admin.firestore();
      const chatRoomRef = db
        .collection("Chat_rooms")
        .doc(ids[i])
        .collection("messages");

      const snapshot = await chatRoomRef
        .orderBy("timestamp", "desc")
        .limit(1)
        .get();

      // snapshot.forEach((doc) => {
      //   chats.push(doc.data());
      // });

      snapshot.forEach((doc) => {
        const timestamp = doc.data().timestamp
          ? doc.data().timestamp.toMillis()
          : null;

        const formattedTimeStamp = new Date(timestamp);

        chats.push({ ...doc.data(), messageTime: formattedTimeStamp });
      });
    }

    return res.status(200).json({ success: true, chats });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getChatRooms,
};
