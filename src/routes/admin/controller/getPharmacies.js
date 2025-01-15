const Pharmacy = require("../../../models/Pharmacy");

const getPharmacies = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const pharmacies = await Pharmacy.find({})
      .limit(limit)
      .sort({ createdAt: -1 });

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
