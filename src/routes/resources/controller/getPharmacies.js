const Pharmacy = require("../../../models/Pharmacy");
const _ = require("lodash");

const getPharmacies = async ({ query }, res, next) => {
  try {
    const { size } = query;

    const pharmacies = await Pharmacy.find({})
      .sort({ createdAt: -1 })
      .limit(size)
      .exec();

    return res.status(200).json({
      success: true,
      pharmacies,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getPharmacies,
};
