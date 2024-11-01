const _ = require("lodash");
const Deletion = require("../../../models/");

const requestDeletion = async ({ body, user }, res, next) => {
  try {
    const deletionRequest = await Deletion.findOne({
      userId: user._id,
    });

    if (!deletionRequest) {
      return res.status(400).json({
        success: false,
      });
    }

    await Deletion.create({
      userId: user._id,
      reason: body.reason,
    });

    return res
      .status(200)
      .json({
        success: true,
        message:
          "Votre demande de suppression de compte a bien été prise en compte",
      });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  requestDeletion,
};
