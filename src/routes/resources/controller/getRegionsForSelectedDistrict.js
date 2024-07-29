const Region = require("../../../models/Region");
const District = require("../../../models/District");

const getRegionsForSelectedDistrict = async (req, res, next) => {
  try {
    const district = await District.findOne({
      name: req.query.districtName,
    });

    const result = await Region.find({
      district: district._id,
    });

    const regions = result.map((region) => region.name);

    console.log({
      regions,
    });

    return res.status(200).json({
      success: true,
      regions,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getRegionsForSelectedDistrict,
};
