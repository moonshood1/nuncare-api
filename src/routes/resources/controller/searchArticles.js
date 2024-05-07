const Article = require("../../../models/Article");

const searchArticles = async ({ body }, res, next) => {
  try {
    const searchText = body.searchText;

    const articles = await Article.find({
      title: { $regex: searchText, $options: "i" },
    });

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
  searchArticles,
};
