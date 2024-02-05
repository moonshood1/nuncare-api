const Article = require("../../../models/Article");

const getArticles = async ({ query }, res, next) => {
  try {
    const { size } = query;

    const articles = await Article.find({})
      .sort({ createdAt: -1 })
      .limit(size)
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
  getArticles,
};
