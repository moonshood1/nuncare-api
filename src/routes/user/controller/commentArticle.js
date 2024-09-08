const _ = require("lodash");
const Article = require("../../../models/Article");
const Comment = require("../../../models/Comment");

const commentArticle = async ({ body, user }, res, next) => {
  try {
    const article = await Article.findOne({
      _id: body.id,
    });

    if (!article) {
      return res.status(400).json({
        success: false,
      });
    }

    await Comment.create({
      author: user._id,
      authorName: `${user.firstName} ${user.lastName}`,
      comment: body.comment,
      article: article._id,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  commentArticle,
};
