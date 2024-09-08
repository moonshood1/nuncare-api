const { commentArticle } = require("./commentArticle");
const { createArticle } = require("./createArticle");
const { getChatRooms } = require("./getChatRooms");
const { getInformations } = require("./getInformations");
const { getUserArticles } = require("./getUserArticles");
const { likeArticle } = require("./likeArticle");
const { readNotification } = require("./readNotification");
const { registerChatRoom } = require("./registerChatRoom");
const { updateAllUserInformations } = require("./updateAllUserInformations");
const { updateUserInformations } = require("./updateUserInformations");

module.exports = {
  getChatRooms,
  registerChatRoom,
  likeArticle,
  readNotification,
  getInformations,
  updateUserInformations,
  getUserArticles,
  createArticle,
  updateAllUserInformations,
  commentArticle,
};
