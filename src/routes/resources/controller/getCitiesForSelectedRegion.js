const Region = require("../../../models/Region");
const City = require("../../../models/City");

const getCitiesForSelectedRegion = async (req, res, next) => {
  try {
    const region = await Region.findOne({
      name: req.query.regionName,
    });

    const result = await City.find({
      region: region._id,
    });

    const cities = result.map((city) => city.name);

    return res.status(200).json({
      success: true,
      cities,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getCitiesForSelectedRegion,
};
