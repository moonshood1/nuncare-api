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
router.post("/search-doctor", searchDoctors)
router.get("/instance", getInstances);
router.post("/search-instance", searchInstances);
router.get("/instances-position", getInstanceWithPosition);

module.exports = router;
