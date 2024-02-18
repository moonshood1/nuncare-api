const User = require("../../../models/User");

const searchDoctors = async ({ body }, res, next) => {
  try {
    const searchText = body.searchText;


    console.log({ searchText })

    const doctors = await User.find({
      $or: [
        {
          firstName: { $regex: new RegExp(searchText, "i") },
        },
        {
          lastName: { $regex: new RegExp(searchText, "i") },
        }
      ]
    }
    );

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
