const Article = require("../../../models/Article");
const _ = require("lodash");

const getDoctorsArticles = async ({ query }, res, next) => {
  try {
    const { id } = query;

    const articles = await Article.find({ isActive: true, author: id })
      .sort({ createdAt: -1 })
      .exec();

    return res.status(200).json({
      success: true,
      articles,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDoctorsArticles,
};
