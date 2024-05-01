const Pharmacy = require("../../../models/Pharmacy");

const searchPharmacies = async ({ body }, res, next) => {
  try {
    const searchText = body.searchText;

    const pharmacies = await Pharmacy.find({
      name: { $regex: new RegExp(searchText, "i") },
    });

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
  searchPharmacies,
};
