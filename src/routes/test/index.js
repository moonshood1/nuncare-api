const express = require("express");
const { generateData } = require("./controller");

const router = express.Router();

router.post("/generate-data", generateData);

module.exports = router;