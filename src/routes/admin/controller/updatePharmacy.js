const Pharmacy = require("../../../models/Pharmacy");
const _ = require("lodash");

const updatePharmacy = async (req, res, next) => {
  try {
    const { body } = req;

    const pharmacy = await Pharmacy.findById(body._id);

    const updatedPharmacy = _.assign(pharmacy, { ...body.data });

    await updatedPharmacy.save();

    return res.status(200).json({
      success: true,
      message: "Les données de la pharmacie ont bien été modifiées",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updatePharmacy };
