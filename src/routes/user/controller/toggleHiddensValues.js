const User = require("../../../models/User");

const toggleHiddensValues = async ({ body, user }, res, next) => {
  try {
    const fieldsToUpdate = body;

    await User.updateOne(
      {
        _id: user._id,
      },
      { $set: fieldsToUpdate }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  toggleHiddensValues,
};
