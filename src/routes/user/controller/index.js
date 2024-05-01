const { getChatRooms } = require("./getChatRooms");
const { getInformations } = require("./getInformations");
const { likeArticle } = require("./likeArticle");
const { readNotification } = require("./readNotification");
const { registerChatRoom } = require("./registerChatRoom");

module.exports = {
  getChatRooms,
  registerChatRoom,
  likeArticle,
  readNotification,
  getInformations,
};
