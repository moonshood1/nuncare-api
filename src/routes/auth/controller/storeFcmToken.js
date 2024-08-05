const User = require("../../../models/User");

const storeFcmToken = async ({ user, body }, res, next) => {
  try {
    const existingToken = await User.findOne({
      deviceId: body.token,
      _id: user._id,
    });

    if (existingToken) {
      return res.status(400).json({
        success: false,
      });
    }

    await User.updateOne(
      {
        _id: user._id,
      },
      {
        $set: {
          deviceId: body.token,
        },
      }
    );

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  storeFcmToken,
};
