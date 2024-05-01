const Medecine = require("../../../models/Medecine");

const searchMedecines = async ({ body }, res, next) => {
  try {
    const searchText = body.searchText;

    const medecines = await Medecine.find({
      name: { $regex: new RegExp(searchText, "i") },
    });

    return res.status(200).json({
      success: true,
      medecines,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  searchMedecines,
};
