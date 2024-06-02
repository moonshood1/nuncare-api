const { getAds } = require("./getAds");
const { getArticles } = require("./getArticles");
const { searchArticles } = require("./searchArticles");
const { getMedecines } = require("./getMedecines");
const { searchMedecines } = require("./searchMedecines");
const { getInfos } = require("./getInfos");
const { getNotifications } = require("./getNotifications");
const { getDoctors } = require("./getDoctors");
const { searchDoctors } = require("./searchDoctors");
const { localizeDoctors } = require("./localizeDoctors");
const { getHospitals } = require("./getHospitals");
const { searchHospitals } = require("./searchHospitals");
const { localizeHospitals } = require("./localizeHospitals");
const { getPharmacies } = require("./getPharmacies");
const { searchPharmacies } = require("./searchPharmacies");
const { localizePharmacies } = require("./localizePharmacies");
const { getDoctorsWithCustomSearch } = require("./getDoctorsWithCustomSearch");

module.exports = {
  getAds,
  getNotifications,
  getInfos,
  getMedecines,
  searchMedecines,
  getArticles,
  searchArticles,
  getDoctors,
  searchDoctors,
  localizeDoctors,
  getHospitals,
  searchHospitals,
  localizeHospitals,
  getPharmacies,
  searchPharmacies,
  localizePharmacies,
  getDoctorsWithCustomSearch,
};
