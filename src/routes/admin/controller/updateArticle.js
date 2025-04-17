const Article = require("../../../models/Article");
const _ = require("lodash");

const updateArticle = async (req, res, next) => {
  try {
    const { body, query } = req;

    const article = await Article.findById(query.id);

    if (!body.img) {
      body.img = article.img;
    }

    const updatedArticle = _.assign(article, { ...body });

    await updatedArticle.save();

    return res.status(200).json({
      success: true,
      message: "Les données de l'article ont bien été modifiées",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updateArticle };
