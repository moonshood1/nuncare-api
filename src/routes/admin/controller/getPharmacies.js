const Pharmacy = require("../../../models/Pharmacy");

const getPharmacies = async ({ query }, res, next) => {
  try {
    let queryParams = { ...query };
    let limit = 0;

    Object.keys(queryParams).forEach((key) => {
      const value = queryParams[key];

      if (value === undefined || value === "") {
        delete queryParams[key];
      } else if (key === "limit") {
        limit = parseInt(value, 10);
        delete queryParams[key];
      } else if (
        typeof value === "string" &&
        isNaN(Number(value)) &&
        value !== "true" &&
        value !== "false"
      ) {
        queryParams[key] = { $regex: value, $options: "i" };
      } else if (value === "true" || value === "false") {
        queryParams[key] = value === "true";
      }
    });

    const pharmacies = await Pharmacy.find(queryParams)
      .limit(limit)
      .sort({ createdAt: -1 });

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
  getPharmacies,
};
