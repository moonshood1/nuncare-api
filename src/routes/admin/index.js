const express = require("express");
const { body } = require("express-validator");
const upload = require("../../middlewares/upload.js");
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
  getSpecialities,
  updateSpeciality,
  deleteSpeciality,
  getDeletionRequests,
  updateDeletionAccountRequest,
  updateKycSubmission,
  addSpeciality,
  getKycSubmissions,
  addKycDocument,
  getKycDocuments,
  getMainStats,
  getMe,
  getDoctorsWithParameters,
  getCitiesForSelectedRegion,
  searchDoctorsWithLabel,
  getSpecialitiesWithParameters,
  getDistricts,
  udpateCity,
  deleteCity,
  addCity,
  addMedecineBulk,
  getMedecinesAttributes,
  deleteMedecineBulk,
  getAreas,
  getSections,
  updatePharmacyGuardList,
  getPharmaciesExport,
  addDistrict,
  updateDistrict,
  getDoctorsPaginated,
  sendNotifications,
  getNotifications,
  addArticle,
} = require("./controller");
const { adminToken } = require("../../services/auth");

const router = express.Router();

router.post("/login", login);
router.get("/me", adminToken, getMe);

router.get("/main-stats", adminToken, getMainStats);

router.get("/notifications", getNotifications);
router.post("/notifications-create", adminToken, sendNotifications);
router.put("/notifications-update", adminToken, sendNotifications);
router.delete("/notifications-delete", adminToken, sendNotifications);

router.get("/admins-get", adminToken, getAdmins);
router.put("/admins-update", adminToken, updateAdminPermission);

router.get("/doctors", getDoctors);
router.get("/doctors-search", adminToken, searchDoctorsWithLabel);
router.get("/doctors-paginated", adminToken, getDoctorsPaginated);
router.get("/doctors-with-params", adminToken, getDoctorsWithParameters);
router.put("/doctors-update", adminToken, updateDoctor);
router.delete("/doctors-delete", adminToken, updateDoctor);

router.get("/ads", getAds);
router.put("/ads-update", adminToken, updateAds);
router.delete("/ads-delete", adminToken, deleteAds);
router.post("/ads-create", adminToken, addAds);

router.get("/pharmacy", getPharmacies);
router.put("/pharmacy-update", adminToken, updatePharmacy);
router.delete("/pharmacy-delete", adminToken, deletePharmacy);
router.post("/pharmacy-create", upload.single("file"), adminToken, addPharmacy);
router.get("/pharmacy-areas", adminToken, getAreas);
router.get("/pharmacy-sections", adminToken, getSections);
router.put(
  "/pharmacy-guard-update",
  upload.single("file"),
  adminToken,
  updatePharmacyGuardList
);
router.get("/pharmacy-export", getPharmaciesExport);

router.get("/medecine", getMedecines);
router.put("/medecine-update", adminToken, updateMedecine);
router.delete("/medecine-delete", adminToken, deleteMedecine);
router.post("/medecine-create", upload.single("file"), adminToken, addMedecine);
router.post("/medecine-create-bulk", adminToken, addMedecineBulk);
router.get("/medecine-attributes", adminToken, getMedecinesAttributes);
router.get("/medecine-delete-bulk", adminToken, deleteMedecineBulk);

router.get("/district", getDistricts);
router.post("/district-create", adminToken, addDistrict);
router.put("/district-update", adminToken, updateDistrict);

router.get("/city", getCities);
router.get("/cities-with-region", adminToken, getCitiesForSelectedRegion);
router.post("/city-create", adminToken, addCity);
router.put("/city-update", adminToken, udpateCity);
router.delete("/city-delete", adminToken, deleteCity);

router.get("/region", getRegions);
router.post("/region-create", adminToken, addRegion);
router.put("/region-update", adminToken, updateRegion);
router.delete("/region-delete", adminToken, deleteRegion);

router.get("/hospital", getHospitals);
router.post("/hospital-create", adminToken, addHospital);
router.put("/hospital-update", adminToken, updateHospital);
router.delete("/hospital-delete", adminToken, deleteHospital);

router.get("/articles", getArticles);
router.post("/articles-create", adminToken, addArticle);
router.put("/articles-update", adminToken, updateArticle);
router.delete("/articles-delete", adminToken, deleteArticle);

router.get("/speciality", getSpecialities);
router.post("/speciality-create", adminToken, addSpeciality);
router.put("/speciality-update", adminToken, updateSpeciality);
router.delete("/speciality-delete", adminToken, deleteSpeciality);
router.get(
  "/specialities-with-params",
  adminToken,
  getSpecialitiesWithParameters
);

router.get("/requests/account-deletions", getDeletionRequests);
router.put(
  "/requests/account-deletions",
  adminToken,
  updateDeletionAccountRequest
);
router.get("/requests/kyc-submission", adminToken, getKycSubmissions);
router.put("/requests/kyc-submission", adminToken, updateKycSubmission);
router.post("/kyc-documents", adminToken, addKycDocument);
router.get("/kyc-documents", adminToken, getKycDocuments);

module.exports = router;
