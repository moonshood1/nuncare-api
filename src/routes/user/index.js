const express = require("express");
const {
  registerChatRoom,
  readNotification,
  getChatRooms,
  likeArticle,
  getInformations,
  updateUserInformations,
} = require("./controller");
const { firebaseToken } = require("../../services/auth");

const router = express.Router();

router.get("/", firebaseToken, getInformations);
router.put("/", firebaseToken, updateUserInformations);
router.post("/chat-room", firebaseToken, registerChatRoom);
router.get("/chat-room", firebaseToken, getChatRooms);
router.post("/article-like", firebaseToken, likeArticle);
router.post("/notification-read", firebaseToken, readNotification);

module.exports = router;
