const Region = require("../../../models/Region");

const getRegions = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;
    let name = query.name ? { $regex: query.name } : { $ne: null };

    const regions = await Region.find({ name }).limit(limit).sort({ name: 1 });

    return res.status(200).json({
      success: true,
      data: regions,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getRegions,
};
