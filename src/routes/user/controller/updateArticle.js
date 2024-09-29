const Article = require("../../../models/Article");

const updateArticle = async ({ body, user }, res, next) => {
  try {
    const article = await Article.findOne({
      author: user._id,
      _id: body._id,
    });

    if (!article) {
      return res.status(400).json({
        success: false,
        message: "Une erreur est survenur lors de la modification de l'article",
      });
    }
    const fieldsToUpdate = body;

    await Article.updateOne(
      {
        author: user._id,
        _id: body._id,
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
    next(error);
  }
};

module.exports = {
  updateArticle,
};
