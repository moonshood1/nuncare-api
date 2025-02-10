const Ad = require("../../../models/Ad");
const _ = require("lodash");

const updateAds = async (req, res, next) => {
  try {
    const { body } = req;

    const ad = await Ad.findById(body.id);

    const updatedAd = _.assign(ad, { ...body.data });

    await updatedAd.save();

    return res.status(200).json({
      success: true,
      message: "Les données de la Pub ont bien été modifiées",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateAds };
