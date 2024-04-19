const { getData } = require("./getData");
const { addArticle } = require("./addArticle");
const { addSkill } = require("./addSkill");
const { addExperience } = require("./addExperience");
const { addAbout } = require("./addAbout");
const { readNotification } = require("./readNotification");
const { updateProfile } = require("./updateProfile");
const { updateExperience } = require("./updateExperience");
const { deleteExperience } = require("./deleteExperience");
const { updateSkill } = require("./updateSkill");
const { deleteSkill } = require("./deleteSkill");
const { updateAbout } = require("./updateAbout");
const { deleteAbout } = require("./deleteAbout");
const { updatePassword } = require("./updatePassword");
const { updateProfileImage } = require("./updateProfileImage");
const { upateCoverImage } = require("./updateCoverImage");
const { addLocation } = require("./addLocation");
const { registerChatRoom } = require("./registerChatRoom");
const { getChatRoomIds } = require("./getChatRoomIds");

module.exports = {
  getData,
  addArticle,
  addSkill,
  deleteSkill,
  updateSkill,
  addExperience,
  deleteExperience,
  updateExperience,
  addAbout,
  updateAbout,
  deleteAbout,
  readNotification,
  updateProfile,
  updatePassword,
  updateProfileImage,
  upateCoverImage,
  addLocation,
  registerChatRoom,
  getChatRoomIds,
};
