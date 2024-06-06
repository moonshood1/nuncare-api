const User = require("../../../models/User");

const generateData = async (req, res, next) => {
  try {
    await User.updateMany(
      {},
      {
        $set: {
          speciality: "Inconnue",
          region: "Inconnue",
        },
      }
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  generateData,
};
