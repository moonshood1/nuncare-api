const Doctor = require("../../../models/User");
const _ = require("lodash");

const getPromotions = async (req, res, next) => {
  try {
    const result = await Doctor.find({
      promotion: { $ne: null },
    });

    const promotions = [
      ...new Set(
        result.map((el) => el.promotion).filter((promotion) => promotion !== "")
      ),
    ];

    return res.status(200).json({
      success: true,
      promotions,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getPromotions,
};
