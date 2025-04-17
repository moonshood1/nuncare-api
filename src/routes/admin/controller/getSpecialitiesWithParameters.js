const Speciality = require("../../../models/Speciality");
const _ = require("lodash");
const getSpecialitiesWithParameters = async ({ query }, res, next) => {
  try {
    let queryParams = { ...query };

    Object.keys(queryParams).forEach((key) => {
      const value = queryParams[key];

      if (value === undefined || value === "") {
        delete queryParams[key];
      } else if (
        typeof value === "string" &&
        isNaN(Number(value)) &&
        value !== "true" &&
        value !== "false"
      ) {
        queryParams[key] = { $regex: value, $options: "i" };
      }
    });

    const doctors = await Speciality.find(queryParams).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getSpecialitiesWithParameters,
};
