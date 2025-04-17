const Pharmacy = require("../../../models/Pharmacy");
const _ = require("lodash");

const updatePharmacy = async (req, res, next) => {
  try {
    const { body, query } = req;

    const pharmacy = await Pharmacy.findById(query.id);

    const updatedPharmacy = _.assign(pharmacy, { ...body });

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
