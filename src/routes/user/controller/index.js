const { getChatRooms } = require("./getChatRooms");
const { getInformations } = require("./getInformations");
const { likeArticle } = require("./likeArticle");
const { readNotification } = require("./readNotification");
const { registerChatRoom } = require("./registerChatRoom");
const { updateUserInformations } = require("./updateUserInformations");

module.exports = {
  getChatRooms,
  registerChatRoom,
  likeArticle,
  readNotification,
  getInformations,
  updateUserInformations,
};
