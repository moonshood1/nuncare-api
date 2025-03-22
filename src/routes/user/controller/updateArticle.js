const Article = require("../../../models/Article");
const _ = require("lodash");

const updateArticle = async ({ body, user }, res, next) => {
  try {
    const article = await Article.findOne({
      author: user._id,
      _id: body.id,
    });

    if (!article) {
      return res.status(400).json({
        success: false,
        message: "Une erreur est survenur lors de la modification de l'article",
      });
    }
    const fieldsToUpdate = _.omit(body, "id");

    await Article.updateOne(
      {
        author: user._id,
        _id: body.id,
      },
      {
        $set: fieldsToUpdate,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Les modifications sur l'article ont bien été prises en compte",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Une erreur est survenur lors de la modification de l'article",
    });
  }
};

module.exports = {
  updateArticle,
};
