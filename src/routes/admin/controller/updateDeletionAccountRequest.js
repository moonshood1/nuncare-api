const Deletion = require("../../../models/AccountDeletion");
const User = require("../../../models/User");
const Doctor = require("../../../models/User");
const _ = require("lodash");

const updateDeletionAccountRequest = async ({ body }, res, next) => {
  try {
    const deletionRequest = await Deletion.findOne({ _id: body._id });

    if (!deletionRequest) {
      return res.status(400).json({
        success: false,
        message: "La requete est introuvable",
      });
    }

    if (deletionRequest && deletionRequest.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "La requete a deja été traitée ",
      });
    }

    await Deletion.updateOne(
      {
        _id: deletionRequest._id,
      },
      {
        $set: {
          status: "processed",
        },
      }
    );

    await User.updateOne(
      {
        _id: deletionRequest.userId,
      },
      {
        $set: {
          isActive: false,
        },
      }
    );

    // TO DO : Supprimer le compte du client de firebase

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  updateDeletionAccountRequest,
};
