const Article = require("../../../models/Article");

const getArticles = async ({ query }, res, next) => {
  try {
    let limit = query.limit ?? 10;

    const articles = await Article.find({})
      .limit(limit)
      .sort({ createdAt: -1 });

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
