const _ = require("lodash");
const Article = require("../../../models/Article");
const Comment = require("../../../models/Comment");

const getArticleComments = async ({ query }, res, next) => {
  try {
    const article = await Article.findOne({
      _id: query.id,
    });

    if (!article) {
      return res.status(400).json({
        success: false,
      });
    }

    const comments = await Comment.find({
      article: article._id,
    });

    return res.status(200).json({ success: true, comments });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getArticleComments,
};
