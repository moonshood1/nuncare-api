const Region = require("../../../models/Region");

const getRegions = async (req, res, next) => {
  try {
    const regions = await Region.find({}).limit(10).sort({ createdAt: -1 });

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
