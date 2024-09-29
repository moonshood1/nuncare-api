const Section = require("../../../models/Section");
const Area = require("../../../models/Area");

const getAreasForSelectedSection = async (req, res, next) => {
  try {
    const section = await Section.findOne({
      name: req.query.sectionName,
    });

    const result = await Area.find({
      section: section._id,
    });

    const areas = result.map((area) => area.name);

    return res.status(200).json({
      success: true,
      areas,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAreasForSelectedSection,
};
