const Region = require("../../../models/Region");
const _ = require("lodash");

const updateRegion = async (req, res, next) => {
  try {
    const { body, query } = req;

    const region = await Region.findById(query.id);

    const updatedRegion = _.assign(region, { ...body });

    await updatedRegion.save();

    return res.status(200).json({
      success: true,
      message: "Les données de la région ont bien été modifiées",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateRegion };
