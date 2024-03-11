const express = require("express");
const {
  getInstanceWithPosition,
  getInstances,
  searchInstances,
  getDoctors,
  searchDoctors,
} = require("./controller");
const { userToken } = require("../../services/auth");

const router = express.Router();

router.get("/doctors", userToken, getDoctors);
router.post("/search-doctor", userToken, searchDoctors)
router.get("/instance", getInstances);
router.post("/search-instance", searchInstances);
router.get("/instances-position", userToken, getInstanceWithPosition);

module.exports = router;
