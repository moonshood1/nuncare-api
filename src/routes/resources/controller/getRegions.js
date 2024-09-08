const Region = require("../../../models/Region");

const getRegions = async (req, res, next) => {
  try {
    const result = await Region.find({});

    const regions = result.map((region) => region.name);

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
  getRegions,
};
