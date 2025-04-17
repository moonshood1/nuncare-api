const Doctor = require("../../../models/User");
const _ = require("lodash");
const getDoctorsWithParameters = async ({ query }, res, next) => {
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
      } else if (value === "true" || value === "false") {
        queryParams[key] = value === "true";
      }
    });

    const doctors = await Doctor.find(queryParams).sort({ createdAt: -1 });

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
  getDoctorsWithParameters,
};
