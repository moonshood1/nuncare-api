const express = require("express");
const { getAds, getMedecines, getArticles, getNotifications } = require("./controller");
const { userToken } = require("../../services/auth");

const router = express.Router();

router.get("/ads", getAds);
router.get("/medecines", getMedecines);
router.get("/articles", getArticles);
router.get("/notifications", userToken, getNotifications)

module.exports = router;
