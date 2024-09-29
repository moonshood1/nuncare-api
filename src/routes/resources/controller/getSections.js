const Section = require("../../../models/Section");

const getSections = async (req, res, next) => {
  try {
    const result = await Section.find({});

    const sections = result.map((section) => section.name);

    return res.status(200).json({
      success: true,
      sections,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getSections,
};
