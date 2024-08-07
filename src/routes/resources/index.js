const express = require("express");
const {
  getAds,
  getMedecines,
  getArticles,
  getNotifications,
  getInfos,
  getDoctors,
  searchDoctors,
  localizeDoctors,
  getHospitals,
  searchHospitals,
  localizeHospitals,
  getPharmacies,
  searchPharmacies,
  localizePharmacies,
  searchMedecines,
  searchArticles,
  getDoctorsWithCustomSearch,
  getLastRegistered,
  getSpecialities,
  getDistricts,
  getRegionsForSelectedDistrict,
  getCitiesForSelectedRegion,
} = require("./controller");
const { firebaseToken } = require("../../services/auth");

const router = express.Router();

router.get("/ads", getAds);
router.get("/notifications", firebaseToken, getNotifications);
router.get("/infos", getInfos);

router.get("/doctors", firebaseToken, getDoctors);
router.post("/doctors-search", firebaseToken, searchDoctors);
router.get("/doctors-localize", firebaseToken, localizeDoctors);
router.get("/doctors-custom-search", firebaseToken, getDoctorsWithCustomSearch);
router.get("/doctors-registered", firebaseToken, getLastRegistered);

router.get("/hospitals", getHospitals);
router.post("/hospitals-search", searchHospitals);
router.post("/hospitals-localize", localizeHospitals);

router.get("/pharmacies", getPharmacies);
router.post("/pharmacies-search", searchPharmacies);
router.post("/pharmacies-localize", localizePharmacies);

router.get("/medecines", getMedecines);
router.post("/medecines-search", searchMedecines);

router.get("/articles", getArticles);
router.post("/articles-search", searchArticles);

router.get("/specialities", getSpecialities);
router.get("/districts", getDistricts);
router.get("/regions-search", getRegionsForSelectedDistrict);
router.get("/cities-search", getCitiesForSelectedRegion);

module.exports = router;
