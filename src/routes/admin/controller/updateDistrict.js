const District = require("../../../models/District");
const _ = require("lodash");

const updateDistrict = async (req, res, next) => {
  try {
    const { body, query } = req;

    const district = await District.findById(query.id);

    const updateddistrict = _.assign(district, { ...body });

    await updateddistrict.save();

    return res.status(200).json({
      success: true,
      message: "Le district a été mise à jour avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateDistrict };
