const Deletion = require("../../../models/AccountDeletion");
const User = require("../../../models/User");
const Doctor = require("../../../models/User");
const _ = require("lodash");

const updateDeletionAccountRequest = async (req, res, next) => {
  try {
    const { query, body } = req;

    const deletionRequest = await Deletion.findOne({ _id: query.id });

    if (!deletionRequest) {
      return res.status(400).json({
        success: false,
        message: "La requete est introuvable",
      });
    }

    if (deletionRequest && deletionRequest.status !== "PENDING") {
      return res.status(400).json({
        success: false,
        message: "La requete a deja été traitée ",
      });
    }

    if (body.validate) {
      await Deletion.updateOne(
        {
          _id: deletionRequest._id,
        },
        {
          $set: {
            status: "APPROVED",
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
    }

    // TO DO : Supprimer le compte du client de firebase

    return res.status(200).json({
      success: true,
      message: "La requete a été traitée avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  updateDeletionAccountRequest,
};
