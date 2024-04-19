const New = require("../../../models/Info");

const getInfos = async ({ user }, res, next) => {
  try {
    const news = await New.find({ users: { $nin: [user._id] } });

    return res.status(200).json({
      success: true,
      news,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getInfos,
};
