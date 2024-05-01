const searchArticles = async ({ body, user }, res, next) => {
  try {
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  searchArticles,
};
