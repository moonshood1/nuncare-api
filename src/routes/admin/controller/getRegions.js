const Region = require("../../../models/Region");

const getRegions = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const regions = await Region.find({}).limit(limit).sort({ createdAt: -1 });

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
