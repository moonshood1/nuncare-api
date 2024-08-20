const User = require("../../../models/User");

const updateUserInformations = async ({ body, user, query }, res, next) => {
  try {
    const fieldName = query.field;

    if (!User.schema.path(fieldName)) {
      return res.status(400).json({
        success: false,
        message: "Champ spécifié non valide",
      });
    }

    const updateObj = {};
    updateObj[fieldName] = body.value;

    console.log(updateObj);

    await User.updateOne({ _id: user._id }, { $set: updateObj });

    return res.status(200).json({
      success: true,
      message: "Le champ a bien été modifié",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  updateUserInformations,
};
