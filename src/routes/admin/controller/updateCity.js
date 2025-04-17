const City = require("../../../models/City");
const _ = require("lodash");

const udpateCity = async (req, res, next) => {
  try {
    const { body, query } = req;

    const city = await City.findById(query.id);

    const updatedCity = _.assign(city, { ...body });

    await updatedCity.save();

    return res.status(200).json({
      success: true,
      message: "Les données de la ville ont bien été modifiées",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { udpateCity };
