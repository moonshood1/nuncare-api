const City = require("../../../models/City");

const getCities = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;
    let name = query.name ? { $regex: query.name } : { $ne: null };

    const cities = await City.find({ name }).limit(limit).sort({ name: 1 });

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
  getCities,
};
