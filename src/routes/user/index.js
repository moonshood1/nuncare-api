const express = require("express");
const {
  getData,
  addArticle,
  addExperience,
  addSkill,
  addAbout,
} = require("./controller");
const { userToken } = require("../../services/auth");

const router = express.Router();

router.get("/", userToken, getData);
router.post("/article", userToken, addArticle);
router.post("/experience", userToken, addExperience);
router.post("/skill", userToken, addSkill);
router.post("/about", userToken, addAbout);

module.exports = router;
