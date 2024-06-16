const Ad = require("../../../models/Ad");

const getAds = async (req, res, next) => {
  try {
    const ads = await Ad.find({}).limit(10).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      ads,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAds,
};
