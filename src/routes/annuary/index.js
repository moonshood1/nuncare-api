const express = require("express");
const {
  getInstanceWithPosition,
  getInstances,
  searchInstances,
  getDoctors,
} = require("./controller");

const router = express.Router();

router.get("/doctors", getDoctors);
router.get("/instance", getInstances);
router.post("/search-instance", searchInstances);
router.get("/instances-position", getInstanceWithPosition);

module.exports = router;
