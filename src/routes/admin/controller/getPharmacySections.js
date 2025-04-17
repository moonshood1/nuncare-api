const Section = require("../../../models/Section");

const getSections = async (req, res, next) => {
  try {
    const sections = await Section.find();

    return res.status(200).json({
      success: true,
      data: sections,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getSections,
};
