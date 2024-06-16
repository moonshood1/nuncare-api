const Pharmacy = require("../../../models/Pharmacy");

const getPharmacies = async (req, res, next) => {
  try {
    const pharmacies = await Pharmacy.find({})
      .limit(10)
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
