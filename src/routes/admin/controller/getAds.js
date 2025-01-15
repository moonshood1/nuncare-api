const Ad = require("../../../models/Ad");

const getAds = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const ads = await Ad.find({}).limit(limit).sort({ createdAt: -1 });

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
