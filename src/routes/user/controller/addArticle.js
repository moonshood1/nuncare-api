const Article = require("../../../models/Article");

const addArticle = async ({ user, body }, res, next) => {
  try {
    const article = await Article.findOne({
      title: body.title,
    });

    if (article)
      return res.status(400).json({
        success: false,
        message: "L'article que vous souhaitez créer existe déja",
      });

    await Article.create({
      title: body.title,
      description: body.description,
      content: body.content,
      img: body.img,
      author: user._id,
      authorName: user.firstName + '' + user.lastName,
      theme: body.theme,
    });

    return res.status(200).json({
      success: true,
      message:
        "Votre article a bien été enregistré. Il sera soumis a l'approbation d'un administrateur",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Une erreur s'est produite lors de  l'ajout de  l'article",
    });
    next(error);
  }
};

module.exports = {
  addArticle,
};
