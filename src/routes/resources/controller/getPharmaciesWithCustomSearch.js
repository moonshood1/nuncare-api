const Pharmacy = require("../../../models/Pharmacy");

const getPharmaciesWithCustomSearch = async ({ body }, res, next) => {
  try {
    const { section, area } = body;

    const requestDb = {
      section,
      area,
    };

    Object.keys(requestDb).forEach((key) => {
      if (requestDb[key] === undefined || requestDb[key] === "") {
        delete requestDb[key];
      }
    });

    console.log(requestDb);

    const pharmacies = await Pharmacy.find(requestDb).sort({ isGuard: -1 });

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
  getPharmaciesWithCustomSearch,
};
