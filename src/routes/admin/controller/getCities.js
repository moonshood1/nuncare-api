const City = require("../../../models/City");

const getCities = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const cities = await City.find({}).limit(limit).sort({ createdAt: -1 });

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
  getCities,
};
