const express = require("express");
const { register, storeFcmToken } = require("./controller");
const { firebaseToken } = require("../../services/auth");

const router = express.Router();

router.post("/register", register);
// router.post("/store-fcm-token", firebaseToken, storeFcmToken);

module.exports = router;
