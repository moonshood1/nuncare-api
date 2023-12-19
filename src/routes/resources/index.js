const express = require("express");
const {
  getAds,
  getDoctors,
  getMedecine,
  getPharmacy,
  getSingleDoctorDetails,
} = require("./controller");

const router = express.Router();

router.get("/doctors", getDoctors);
router.get("/ads", getAds);
router.get("/pharmacy", getPharmacy);
router.get("/medecine", getMedecine);
router.get("/doctors/:id", getSingleDoctorDetails);

module.exports = router;
