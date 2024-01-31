const getSingleDoctorDetails = (req, res, next) => {
  try {
    const { id } = req.params;

    if (id !== "1") {
      return res.status(400).json({
        success: false,
        message: "Docteur introuvable",
      });
    }
    return res.status(200).json({
      success: true,
      data: {
        lastName: "Kouassi",
        sex: "Female",
        firstName: "Aline",
        hospital: "Hopital Sacré Coeur",
        speciality: "Cardiologie",
        years: 15,
        img: "https://placeholder.it/40x40",
        email: "kouassialine@gmail.com",
        phone: "+2250504473099",
        _id: "45ifgu67ufbhvjdfkdm",
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getSingleDoctorDetails,
};
