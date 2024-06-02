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
    await Article.create({
      title: body.title,
      description: body.description,
      content: body.content,
      img: body.img,
      author: user._id,
      authorName: user.firstName + " " + user.lastName,
    });
    return res.status(200).json({
      success: true,
      message:
        "La création de votre article a bien été prise en compte. Il sera soumis a validation avant la publication",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createArticle,
};
