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
  getDoctorsArticles,
  getPromotions,
  getArticleComments,
  getRegions,
} = require("./controller");
const { firebaseToken } = require("../../services/auth");

const router = express.Router();

router.get("/ads", getAds);
router.get("/notifications", firebaseToken, getNotifications);
router.get("/infos", getInfos);
router.get("/promotions", getPromotions);

router.get("/doctors", firebaseToken, getDoctors);
router.post("/doctors-search", firebaseToken, searchDoctors);
router.get("/doctors-localize", firebaseToken, localizeDoctors);
router.post(
  "/doctors-custom-search",
  firebaseToken,
  getDoctorsWithCustomSearch
);
router.get("/doctors-registered", firebaseToken, getLastRegistered);
router.get("/doctors-articles", getDoctorsArticles);

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
router.get("/articles-comments", getArticleComments);

router.get("/specialities", getSpecialities);
router.get("/districts", getDistricts);
router.get("/regions-search", getRegionsForSelectedDistrict);
router.get("/regions", getRegions);
router.get("/cities-search", getCitiesForSelectedRegion);

module.exports = router;
