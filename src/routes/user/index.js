const express = require("express");
const {
  registerChatRoom,
  readNotification,
  getChatRooms,
  likeArticle,
  getInformations,
  updateUserInformations,
  getUserArticles,
  createArticle,
  updateAllUserInformations,
  commentArticle,
  updateArticle,
  toggleHiddensValues,
  submitKyc,
  requestDeletion,
} = require("./controller");
const { firebaseToken } = require("../../services/auth");

const router = express.Router();

router.get("/", firebaseToken, getInformations);
router.get("/articles", firebaseToken, getUserArticles);
router.post("/articles-create", firebaseToken, createArticle);
router.purge("/article-update", firebaseToken, updateArticle);
router.put("/", firebaseToken, updateUserInformations);
router.put("/update-informations", firebaseToken, updateAllUserInformations);
router.post("/chat-room", firebaseToken, registerChatRoom);
router.get("/chat-room", firebaseToken, getChatRooms);
router.post("/article-like", firebaseToken, likeArticle);
router.post("/article-comment", firebaseToken, commentArticle);
router.post("/notification-read", firebaseToken, readNotification);
router.put("/hidden-values", firebaseToken, toggleHiddensValues);
router.post("/kyc-submit", firebaseToken, submitKyc);
router.get("/submit-account-deletion", requestDeletion);

module.exports = router;
