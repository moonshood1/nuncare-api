const register = ({ body }, res, next) => {
  try {
    const { email, firstName, lastName } = body;

    if (!firstName) {
      return res.status(400).json({
        error: true,
        message: "Prénom requis",
      });
    }

    if (!lastName) {
      return res.status(400).json({
        error: true,
        message: "Nom de famille requis",
      });
    }

    if (email === "louisrogerguirika@gmail.com") {
      return res.status(400).json({
        error: true,
        message: "Utilisateur deja inscrit",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Inscription reussie",
      data: {
        email: "louisroger@live.fr",
        firstName: "Louis Roger",
        lastName: "Guirika",
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  register,
};
