const { getAds } = require("./getAds");
const { getDoctors } = require("./getDoctors");
const { getMedecine } = require("./getMedecine");
const { getPharmacy } = require("./getPharmacy");
const { getSingleDoctorDetails } = require("./getSingleDoctor");

module.exports = {
  getSingleDoctorDetails,
  getPharmacy,
  getMedecine,
  getDoctors,
  getAds,
};
