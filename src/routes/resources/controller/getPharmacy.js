const getPharmacy = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      data: [
        {
          name: "Pharmacie Riviera 3",
          city: "Abidjan",
          district: "Cocody Riviera 3",
          position: {
            lng: "",
            lat: "",
          },
          phone: "",
          _id: "47ufbhv88ywdjfkdm",
        },
        {
          name: "Pharmacie Longchamp",
          city: "Abidjan",
          district: "Plateau",
          position: {
            lng: "",
            lat: "",
          },
          phone: "",
          _id: "33ufbhv88ywdjfkdm",
        },
        {
          name: "Pharmacie Centrale",
          city: "Abidjan",
          district: "Plateau",
          position: {
            lng: "",
            lat: "",
          },
          phone: "",
          _id: "17ufbhv88ywdjfkdm",
        },
      ],
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getPharmacy,
};
