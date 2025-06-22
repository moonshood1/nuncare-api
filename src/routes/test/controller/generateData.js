const Pharmacy = require("../../../models/Pharmacy");
const pharmacies = require("../../test/controller/pharmacies.json");
const User = require("../../../models/User");
const sections = require("../../test/controller/sections_and_areas.json");
const Section = require("../../../models/Section");
const Area = require("../../../models/Area");
const Info = require("../../../models/Info");
const Ad = require("../../../models/Ad");
const Article = require("../../../models/Article");
const Document = require("../../../models/KycDocumentType");
const admin = require("firebase-admin");
const Code = require("../../../models/PharmaCode");
const { generatePharmacyUniqueCode } = require("../../../helpers");
const Admin = require("../../../models/Admin");

const generateData = async (req, res, next) => {
  try {
    // await Admin.create({
    //   firstName: "NUNCARE",
    //   lastName: "ADMIN",
    //   email: "nuncare-admin@nuncare.pro",
    //   password: "NUNCARE2025",
    // });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  generateData,
};
