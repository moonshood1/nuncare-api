const getMedecine = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      data: [
        {
          name: "Paracetamol",
          type: "",
          category: "Headache",
          _id: "4567ufbhv88ywdjfkdm",
        },
        {
          name: "Utrogestan",
          type: "",
          category: "Fever",
          _id: "47ufb090pookmdvfkdm",
        },
        {
          name: "Doliprane",
          type: "",
          category: "Virus",
          _id: "98987ufbhvjdfkdm",
        },
      ],
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getMedecine,
};
