const Instance = require("../../../models/Instance");

const searchInstances = async ({ body }, res, next) => {
  try {
    const searchText = body.searchText;

    const instances = await Instance.find({
      name: { $regex: new RegExp(searchText, "i") },
    });

    return res.status(200).json({
      success: true,
      instances,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  searchInstances,
};
