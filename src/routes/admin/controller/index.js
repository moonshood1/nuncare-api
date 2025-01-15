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

module.exports = {
  login,
  getAdmins,
  updateAdminPermission,

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

  addMedecine,
  addPharmacy,
  addAds,
  addRegion,
  addCity,
  addHospital,
  addSpeciality,

  getAds,
  getDoctors,
  getCities,
  getRegions,
  getHospitals,
  getPharmacies,
  getMedecines,
  getArticles,
  getSpecialities,
  getDeletionRequests,

  deleteAds,
  deleteDoctor,
  deleteCity,
  deleteHospital,
  deleteRegion,
  deleteMedecine,
  deletePharmacy,
  deleteArticle,
  deleteSpeciality,
};
