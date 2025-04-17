const Pharmacy = require("../../../models/Pharmacy");
const Doctor = require("../../../models/User");
const Ad = require("../../../models/Ad");
const Article = require("../../../models/Article");
const Medecine = require("../../../models/Medecine");
const Region = require("../../../models/Region");
const Speciality = require("../../../models/Speciality");
const City = require("../../../models/City");
const Kyc = require("../../../models/Verification");

const getMainStats = async (req, res, next) => {
  try {
    const stats = {
      doctors: await Doctor.countDocuments(),
      pharmacies: await Pharmacy.countDocuments(),
      ads: await Ad.countDocuments(),
      medecines: await Medecine.countDocuments(),
      regions: await Region.countDocuments(),
      cities: await City.countDocuments(),
      articles: await Article.countDocuments(),
      specialities: await Speciality.countDocuments(),
      kyc: await Kyc.countDocuments(),
    };

    return res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getMainStats,
};
