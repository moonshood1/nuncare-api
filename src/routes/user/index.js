const express = require("express");
const {
  registerChatRoom,
  readNotification,
  getChatRooms,
  interractWithArticle,
  getInformations,
  updateUserInformations,
  getUserArticles,
  createArticle,
} = require("./controller");
const { firebaseToken } = require("../../services/auth");

const router = express.Router();

router.get("/", firebaseToken, getInformations);
router.get("/articles", firebaseToken, getUserArticles);
router.post("/articles-create", firebaseToken, createArticle);
router.put("/", firebaseToken, updateUserInformations);
router.post("/chat-room", firebaseToken, registerChatRoom);
router.get("/chat-room", firebaseToken, getChatRooms);
router.post("/article-interract", firebaseToken, interractWithArticle);
router.post("/notification-read", firebaseToken, readNotification);

module.exports = router;
