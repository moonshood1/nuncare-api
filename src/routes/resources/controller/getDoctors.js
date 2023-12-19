const getDoctors = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      data: [
        {
          firstName: "Louis Roger",
          lastName: "Moonshood",
          email: "loulou@email.com",
          phone: "+2250708990169",
          hospital: "Hopital Sacré Coeur",
          speciality: "Cardiologie",
          years: 15,
          img: "https://placeholder.it/40x40",
          _id: "4567ufbhv88ywdjfkdm",
        },
        {
          firstName: "Louis",
          lastName: "Bertignac",
          email: "louisbertignac@email.com",
          phone: "+2250708995169",
          hospital: "Hopital Sacré Coeur",
          speciality: "Urologie",
          years: 6,
          img: "https://placeholder.it/40x40",
          _id: "4900ufbhv88ywdjfkdm",
        },
        {
          firstName: "Louis",
          lastName: "Payne",
          email: "louisbpayne@email.com",
          phone: "+2250708997169",
          hospital: "Hopital Sacré Coeur",
          speciality: "Gynecologie",
          years: 10,
          img: "https://placeholder.it/40x40",
          _id: "4900ufbhv88ywdjfkdm",
        },
      ],
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getDoctors,
};
