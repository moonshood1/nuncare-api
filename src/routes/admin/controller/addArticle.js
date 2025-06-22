const Article = require("../../../models/Article");
const User = require("../../../models/User");

const addArticle = async ({ body }, res, next) => {
  try {
    const user = await User.findOne({
      email: "user-nuncare@nuncare.pro",
    });

    const isArticle = await Article.findOne({
      title: body.title,
      author: user._id,
    });

    if (isArticle) {
      return res.status(400).json({
        success: false,
        message:
          "Un article avec ce titre existe deja dans la base , veuillez le modifier",
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
      type: "img",
      coverImage: body.coverImage ?? "",
      isActive: true,
    });
    return res.status(200).json({
      success: true,
      message: "La création de votre article a bien été prise en compte.",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Une erreur est survenue lors de la création de l'article",
    });
  }
};

module.exports = {
  addArticle,
};
