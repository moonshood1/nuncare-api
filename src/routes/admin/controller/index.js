const { getAds } = require("./getAds");
const { addAds } = require("./addAds");
const { addMedecine } = require("./addMedecine");
const { addPharmacy } = require("./addPharmacy");
const { deleteAds } = require("./deleteAds");
const { getDoctors } = require("./getDoctors");
const { deleteDoctor } = require("./deleteDoctor");
const { getMedecines } = require("./getMedecines");
const { deleteMedecine } = require("./deleteMedecine");
const { deletePharmacy } = require("./deletePharmacy");
const { updateAds } = require("./updateAds");
const { updateDoctor } = require("./updateDoctor");
const { updateMedecine } = require("./updateMedecine");
const { updatePharmacy } = require("./updatePharmacy");
const { getCities } = require("./getCities");
const { getDistricts } = require("./getDistricts");
const { getRegions } = require("./getRegions");
const { getHospitals } = require("./getHospitals");
const { getPharmacies } = require("./getPharmacies");
const { login } = require("./login");
const { deleteCity } = require("./deleteCity");
const { deleteHospital } = require("./deleteHospital");
const { deleteRegion } = require("./deleteRegion");
const { addRegion } = require("./addRegion");
const { addCity } = require("./addCity");
const { addHospital } = require("./addHospital");
const { updateHospital } = require("./updateHospital");
const { updateRegion } = require("./updateRegion");
const { udpateCity } = require("./updateCity");
const { getAdmins } = require("./getAdmins");
const { updateAdminPermission } = require("./updateAdminPermission");
const { getArticles } = require("./getArticles");
const { updateArticle } = require("./updateArticle");
const { deleteArticle } = require("./deleteArticle");
const { addSpeciality } = require("./addSpeciality");
const { getSpecialities } = require("./getSpecialities");
const { deleteSpeciality } = require("./deleteSpeciality");
const { updateSpeciality } = require("./updateSpeciality");
const { getDeletionRequests } = require("./getDeletionRequest");
const {
  updateDeletionAccountRequest,
} = require("./updateDeletionAccountRequest");
const { updateKycSubmission } = require("./updateKycSubmission");
const { getKycSubmissions } = require("./getKycSubmissions");
const { addKycDocument } = require("./addKycDocuments");
const { getKycDocuments } = require("./getKycDocuments");
const { getMainStats } = require("./getMainStats");
const { getMe } = require("./getMe");
const { getDoctorsWithParameters } = require("./getDoctorsWithParameters");
const { getCitiesForSelectedRegion } = require("./getCitiesForSelectedRegion");
const { searchDoctorsWithLabel } = require("./searchDoctorsWithLabel");
const {
  getSpecialitiesWithParameters,
} = require("./getSpecialitiesWithParameters");
const { addMedecineBulk } = require("./addMedecinesBulk");
const { getMedecinesAttributes } = require("./getMedecinesAttributes");
const { deleteMedecineBulk } = require("./deleteMedecineBulk");
const { getSections } = require("./getPharmacySections");
const { getAreas } = require("./getPharmacyAreas");
const { updatePharmacyGuardList } = require("./updatePharmacyGuardList");
const { getPharmaciesExport } = require("./getPharmaciesExport");
const { addDistrict } = require("./addDistrict");
const { updateDistrict } = require("./updateDistrict");
const { getDoctorsPaginated } = require("./getDoctorsPaginated");
const { sendNotifications } = require("./sendNotifications");
const { getNotifications } = require("./getNotifications");
const { updateNotification } = require("./updateNotification");
const { deleteNotification } = require("./deleteNotification");
const { addArticle } = require("./addArticle");

module.exports = {
  login,
  getAdmins,
  updateAdminPermission,
  getMainStats,
  getMe,

  updateHospital,
  updateRegion,
  udpateCity,
  updateAds,
  updateDoctor,
  updateMedecine,
  updatePharmacy,
  updateArticle,
  updateSpeciality,
  updateDeletionAccountRequest,
  updatePharmacyGuardList,
  updateDistrict,
  updateNotification,

  addMedecine,
  addPharmacy,
  addAds,
  addRegion,
  addCity,
  addHospital,
  addSpeciality,
  addMedecineBulk,
  addDistrict,
  addArticle,
  sendNotifications,

  getAds,
  getDoctors,
  getDoctorsWithParameters,
  getDoctorsPaginated,
  getCities,
  getCitiesForSelectedRegion,
  getDistricts,
  getRegions,
  getHospitals,
  getPharmacies,
  getMedecines,
  getArticles,
  getSpecialities,
  getSpecialitiesWithParameters,
  getDeletionRequests,
  searchDoctorsWithLabel,
  getMedecinesAttributes,
  getSections,
  getAreas,
  getPharmaciesExport,
  getNotifications,

  deleteAds,
  deleteDoctor,
  deleteCity,
  deleteHospital,
  deleteRegion,
  deleteMedecine,
  deletePharmacy,
  deleteArticle,
  deleteSpeciality,
  deleteMedecineBulk,
  deleteNotification,

  updateKycSubmission,
  getKycSubmissions,
  addKycDocument,
  getKycDocuments,
};
