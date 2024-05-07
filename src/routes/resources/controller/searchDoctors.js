const User = require("../../../models/User");

const searchDoctors = async ({ body, user }, res, next) => {
  try {
    const searchText = body.searchText;

    const doctors = await User.find({
      _id: { $ne: user._id },
      $or: [
        { email: { $regex: searchText, $options: "i" } },
        { phone: { $regex: searchText, $options: "i" } },
        { firstName: { $regex: searchText, $options: "i" } },
        { lastName: { $regex: searchText, $options: "i" } },
      ],
    });

    return res.status(200).json({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  searchDoctors,
};
