const User = require("../../../models/User");
const Article = require("../../../models/Article");

const getData = async ({ user }, res, next) => {
  try {
    const u = await User.findOne({
      _id: user._id,
    });

    const articles = await Article.find({
      author: user._id,
      isActive: true,
    });

    const articlesWithAuthorNames = await Promise.all(
      articles.map(async (article) => {
        const author = await User.findOne({
          _id: article.author,
        });

        const articleWithAuthorName = {
          ...article._doc,
          author: author
            ? `Dr ${author.firstName} ${author.lastName}`
            : "Inconnu",
        };

        return articleWithAuthorName;
      })
    );

    return res.status(200).json({
      success: true,
      user: u,
      articles: articlesWithAuthorNames,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getData,
};
