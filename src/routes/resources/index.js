const express = require("express");
const {
  getAds,
  getMedecines,
  getArticles,
  getNotifications,
  getInfos,
} = require("./controller");
const { userToken, firebaseToken } = require("../../services/auth");

const router = express.Router();

router.get("/ads", getAds);
router.get("/medecines", getMedecines);
router.get("/articles", getArticles);
router.get("/notifications", userToken, getNotifications);
router.get("/infos", getInfos);

module.exports = router;
