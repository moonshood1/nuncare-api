const Doctor = require("../../../models/User");
const _ = require("lodash");

const getDoctorsPaginated = async ({ query }, res, next) => {
  try {
    const limit = parseInt(query.limit) || 10;
    const page = parseInt(query.page) || 1;

    const doctors = await Doctor.find({})
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Doctor.countDocuments();

    return res.status(200).json({
      success: true,
      data: doctors,
      meta: {
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  getDoctorsPaginated,
};
