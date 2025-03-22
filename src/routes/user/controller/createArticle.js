const Article = require("../../../models/Article");

const createArticle = async ({ body, user }, res, next) => {
  try {
    const isArticle = await Article.findOne({
      title: body.title,
      author: user._id,
    });

    if (isArticle) {
      return res.status(400).json({
        success: false,
        message:
          "Un article avec ce titre existe deja sur votre compte , veuillez le modifier",
      });
    }

    let titleFormatted =
      body.title.charAt(0).toUpperCase() + body.title.slice(1);

    await Article.create({
      title: titleFormatted,
      description: body.description,
      content: body.content,
      img: body.img,
      author: user._id,
      authorName: user.firstName + " " + user.lastName,
      externalLink: body.externalLink ?? "",
      externalLinkTitle: body.externalLinkTitle ?? "",
      type: body.type,
      coverImage: body.coverImage,
    });
    return res.status(200).json({
      success: true,
      message:
        "La création de votre article a bien été prise en compte. Il sera soumis a validation avant la publication",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Une erreur est survenur lors de la création de l'article",
    });
    next(error);
  }
};

module.exports = {
  createArticle,
};
