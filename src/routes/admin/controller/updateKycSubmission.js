const KycRequest = require("../../../models/Verification");
const Doctor = require("../../../models/User");

const _ = require("lodash");

const updateKycSubmission = async (req, res, next) => {
  try {
    const { body, query } = req;

    const request = await KycRequest.findOne({ _id: query.id });

    if (request.status != "PENDING") {
      return res.status(400).json({
        success: false,
        message: "La requete a deja été traitée",
      });
    }

    const doctor = await Doctor.findOne({ _id: request.user });

    if (body.validate) {
      await KycRequest.updateOne(
        {
          _id: request._id,
        },
        {
          $set: {
            status: "APPROVED",
          },
        }
      );

      await Doctor.updateOne(
        {
          _id: doctor._id,
        },
        {
          $set: {
            isActive: true,
            kycStatus: "APPROVED",
            firstName: request.firstName,
            lastName: request.lastName,
          },
        }
      );
    } else {
      await KycRequest.updateOne(
        {
          _id: request._id,
        },
        {
          $set: {
            status: "REJECTED",
          },
        }
      );

      await Doctor.updateOne(
        {
          _id: doctor._id,
        },
        {
          $set: {
            kycStatus: "REJECTED",
          },
        }
      );
    }

    return res.status(200).json({
      success: true,
      message: `La requete KYC a bien été traitée.`,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateKycSubmission };
