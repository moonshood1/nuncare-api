const Article = require("../../../models/Article");

const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({}).limit(10).sort({ createdAt: -1 });

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
