const express = require("express");
const { register, storeFcmToken, login } = require("./controller");
const { firebaseToken } = require("../../services/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.post("/store-fcm-token", firebaseToken, storeFcmToken);

module.exports = router;
