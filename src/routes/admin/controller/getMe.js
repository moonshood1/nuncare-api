const getMe = async (req, res, next) => {
  try {
    const user = req.user;
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getMe,
};
