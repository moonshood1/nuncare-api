const express = require("express");
const { body } = require("express-validator");
const {
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
  getAds,
  getDoctors,
  getMedecines,
  getPharmacies,
  login,
  getCities,
  getRegions,
  getHospitals,
  addRegion,
  updateRegion,
  deleteRegion,
  addHospital,
  updateHospital,
  deleteHospital,
  getAdmins,
  updateAdminPermission,
  getArticles,
  updateArticle,
  deleteArticle,
} = require("./controller");
const { adminToken } = require("../../services/auth");

const router = express.Router();

router.post(
  "/login",
  // [
  //   body("email")
  //     .isEmail()
  //     .withMessage("Veuillez fournir un email valide")
  //     .not()
  //     .isEmpty()
  //     .withMessage("L'email ne peut pas être vide"),
  //   body("password").not().isEmpty().withMessage("Le mot de passe est requis"),
  // ],
  login
);

router.get("/admins-get", adminToken, getAdmins);
router.put("/admins-update", adminToken, updateAdminPermission);

router.get("/doctors", getDoctors);
router.put("/doctors-update", adminToken, updateDoctor);
router.delete("/doctors-delete", adminToken, updateDoctor);

router.get("/ads", getAds);
router.put("/ads-update", adminToken, updateAds);
router.delete("/ads-delete", adminToken, deleteAds);
router.post("/ads-create", adminToken, addAds);

router.get("/pharmacy", getPharmacies);
router.put("/pharmacy-update", adminToken, updatePharmacy);
router.delete("/pharmacy-delete", adminToken, deletePharmacy);
router.post("/pharmacy-create", adminToken, addPharmacy);

router.get("/medecine", getMedecines);
router.put("/medecine-update", adminToken, updateMedecine);
router.delete("/medecine-delete", adminToken, deleteMedecine);
router.post("/medecine-create", adminToken, addMedecine);

router.get("/city", getCities);
router.post("/city-create", adminToken, getCities);
router.put("/city-update", adminToken, getCities);
router.delete("/city-delete", adminToken, getCities);

router.get("/region", getRegions);
router.post("/region-create", adminToken, addRegion);
router.put("/region-update", adminToken, updateRegion);
router.delete("/region-delete", adminToken, deleteRegion);

router.get("/hospital", getHospitals);
router.post("/hospital-create", adminToken, addHospital);
router.put("/hospital-update", adminToken, updateHospital);
router.delete("/hospital-delete", adminToken, deleteHospital);

router.get("/articles", getArticles);
router.put("/articles-update", adminToken, updateArticle);
router.delete("/articles-delete", adminToken, deleteArticle);

module.exports = router;
