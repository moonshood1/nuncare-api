const { addAds } = require("./addAds");
const { addDoctor } = require("./addDoctor");
const { addMedecine } = require("./addMedecine");
const { addPharmacy } = require("./addPharmacy");
const { deleteAds } = require("./deleteAds");
const { deleteDoctor } = require("./deleteDoctor");
const { deleteMedecine } = require("./deleteMedecine");
const { deletePharmacy } = require("./deletePharmacy");
const { updateAds } = require("./updateAds");
const { updateDoctor } = require("./updateDoctor");
const { updateMedecine } = require("./updateMedecine");
const { updatePharmacy } = require("./updatePharmacy");

module.exports = {
  updateAds,
  updateDoctor,
  updateMedecine,
  updatePharmacy,
  deleteAds,
  deleteDoctor,
  deleteMedecine,
  deletePharmacy,
  addMedecine,
  addPharmacy,
  addDoctor,
  addAds,
};
