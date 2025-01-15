const Article = require("../../../models/Article");

const deleteArticle = async ({ body }, res, next) => {
  try {
    const { _id } = body;

    const result = await Article.findById(_id);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Article introuvable",
      });
    }

    // await Article.deleteOne({
    //   _id: result._id,
    // });

    await Article.updateOne(
      {
        _id: result._id,
      },
      {
        $set: {
          isActive: false,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Article desactivé",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { deleteArticle };
