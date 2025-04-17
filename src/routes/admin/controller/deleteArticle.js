const Article = require("../../../models/Article");

const deleteArticle = async (req, res, next) => {
  try {
    const { query } = req;

    const result = await Article.findById(query.id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Article introuvable",
      });
    }

    await Article.deleteOne({
      _id: result._id,
    });

    return res.status(200).json({
      success: true,
      message: "Artcile supprimé avec succès",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteArticle };
