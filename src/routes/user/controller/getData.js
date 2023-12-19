const getData = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      data: {
        lastName: "Guirika",
        firstName: "Louis Roger",
        email: "louisrogerguirika@gmail.com",
        _id: "4567ufbhvjdfkdm",
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getData,
};
