const express = require("express");
const {
  getData,
  addArticle,
  addExperience,
  addSkill,
  addAbout,
  readNotification,
  updateProfile,
  deleteExperience,
  updateExperience,
  updateSkill,
  deleteSkill,
  updateAbout,
  deleteAbout,
  updatePassword,
  updateProfileImage,
  upateCoverImage,
  addLocation,
} = require("./controller");
const { userToken } = require("../../services/auth");

const router = express.Router();

router.get("/", userToken, getData);
router.put("/", userToken, updateProfile)
router.post("/article", userToken, addArticle);
router.use("/experience", userToken).route("/experience").post(addExperience).delete(deleteExperience).put(updateExperience);
router.use("/skill", userToken).route("/skill").post(addSkill).put(updateSkill).delete(deleteSkill);
router.use("/about", userToken).route("/about").post(addAbout).put(updateAbout).delete(deleteAbout);
router.post('/notification/:id', userToken, readNotification)
router.put('/password', userToken, updatePassword)
router.put('/profile-image', userToken, updateProfileImage)
router.put('/cover-image', userToken, upateCoverImage)
router.post('/location', userToken, addLocation)

module.exports = router;
