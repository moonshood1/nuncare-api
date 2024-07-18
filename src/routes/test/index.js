const express = require("express");
const { generateData } = require("./controller");
const { adminToken } = require("../../services/auth");

const router = express.Router();

router.post("/generate-data", adminToken, generateData);

module.exports = router;
