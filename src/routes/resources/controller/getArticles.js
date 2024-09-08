const Article = require("../../../models/Article");
const Comment = require("../../../models/Comment");
const _ = require("lodash");

const getArticles = async ({ query }, res, next) => {
  try {
    const { size } = query;

    const articles = await Article.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(size)
      .exec();

    // for (let i = 0; i < articles.length; i++) {
    //   const el = await Comment.find({ article: articles[i]._id });
    //   comments.push(el);
    // }

    // const articlesWithComments = await Promise.all(
    //   articles.map(async (article) => {
    //     const comments = await Comment.find({ article: article._id });
    //     return { ...article.toObject(), comments };
    //   })
    // );

    // console.log({
    //   articlesWithComments,
    // });

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
