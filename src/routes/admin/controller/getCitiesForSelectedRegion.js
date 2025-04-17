const Region = require("../../../models/Region");
const City = require("../../../models/City");

const getCitiesForSelectedRegion = async (req, res, next) => {
  try {
    const region = await Region.findOne({
      name: req.query.regionName,
    });

    const cities = await City.find({
      region: region._id,
    });

    return res.status(200).json({
      success: true,
      data: cities,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getCitiesForSelectedRegion,
};
