const Ad = require("../../../models/Ad");

const getAds = async (req, res, next) => {
  try {
    const ads = await Ad.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(3)
      .exec();

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
