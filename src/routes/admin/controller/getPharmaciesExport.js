const Pharmacy = require("../../../models/Pharmacy");

const getPharmaciesExport = async (req, res, next) => {
  try {
    const pharmacies = await Pharmacy.find(
      {},
      {
        _id: 0,
        code: 1,
        name: 1,
        section: 1,
        area: 1,
        address: 1,
        lng: 1,
        lat: 1,
        phone: 1,
        owner: 1,
        isGuard: 1,
      }
    );

    return res.status(200).json({
      success: true,
      data: pharmacies,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getPharmaciesExport,
};
