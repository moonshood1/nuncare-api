const Article = require("../../../models/Article");

const getUserArticles = async ({ user }, res, next) => {
  try {
    const articles = await Article.find({
      isActive: true,
      isPublished: true,
      author: user._id,
    })
      .sort({ createdAt: -1 })
      .exec();

    return res.status(200).json({ success: true, articles });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des articles de l'utilisateur.",
    });
  }
};

module.exports = {
  getUserArticles,
};
