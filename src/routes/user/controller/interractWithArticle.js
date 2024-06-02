const _ = require("lodash");
const Article = require("../../../models/Article");

const interractWithArticle = async ({ body, user }, res, next) => {
  try {
    const article = await Article.findOne({
      _id: body.id,
    });

    if (!article) {
      return res.status(400).json({
        success: false,
      });
    }

    const userId = user._id;

    let update;

    if (_.includes(article.likes, userId)) {
      update = { $pull: { likes: userId } };
    } else {
      update = { $push: { likes: userId } };
    }

    await Article.updateOne({ _id: body.id }, update);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  interractWithArticle,
};
