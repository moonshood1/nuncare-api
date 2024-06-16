const City = require("../../../models/City");

const getCities = async (req, res, next) => {
  try {
    const cities = await City.find({}).limit(10).sort({ createdAt: -1 });

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
