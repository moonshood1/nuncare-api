const express = require("express");
const {
  addDoctor,
  deleteDoctor,
  updateDoctor,
  updateAds,
  deleteAds,
  addAds,
  updatePharmacy,
  deletePharmacy,
  addPharmacy,
  updateMedecine,
  deleteMedecine,
  addMedecine,
} = require("./controller");

const router = express.Router();

router.route("/doctors").put(updateDoctor).delete(deleteDoctor).post(addDoctor);

router.route("/ads").put(updateAds).delete(deleteAds).post(addAds);

router
  .route("/pharmacy")
  .put(updatePharmacy)
  .delete(deletePharmacy)
  .post(addPharmacy);

router
  .route("/medecine")
  .put(updateMedecine)
  .delete(deleteMedecine)
  .post(addMedecine);

module.exports = router;
