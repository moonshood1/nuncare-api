const Doctor = require("../../../models/User");
const _ = require("lodash");

const searchDoctorsWithLabel = async ({ query }, res, next) => {
  try {
    let queryParams = { ...query };

    Object.keys(queryParams).forEach((key) => {
      if (queryParams[key] === undefined || queryParams[key] === "") {
        delete queryParams[key];
      } else if (typeof queryParams[key] === "string") {
        queryParams[key] = { $regex: queryParams[key], $options: "i" };
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
  searchDoctorsWithLabel,
};
