const express = require("express");
const { getAds, getMedecines, getArticles } = require("./controller");

const router = express.Router();

router.get("/ads", getAds);
router.get("/medecines", getMedecines);
router.get("/articles", getArticles);

module.exports = router;
