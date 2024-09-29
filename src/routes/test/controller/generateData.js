const Pharmacy = require("../../../models/Pharmacy");
const pharmacies = require("../../test/controller/pharmacies.json");
const User = require("../../../models/User");
const sections = require("../../test/controller/sections_and_areas.json");
const Section = require("../../../models/Section");
const Area = require("../../../models/Area");
const Info = require("../../../models/Info");

const generateData = async (req, res, next) => {
  try {
    // await Info.create({
    //   title: "",
    //   message: "",
    //   img: "",
    //   link: "",
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
