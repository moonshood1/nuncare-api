const getAds = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      data: [
        {
          label: "Jumia Deals du Vendredi",
          img: "https://placeholder.it/40x40",
          company: "Jumia",
          description: "+2250708995169",
          webisteLink: "https://jumia.ci",
          isActive: true,
          _id: "00ufbhv88ywdyuyfkdm",
        },
        {
          label: "Djamo Carte Gratuite",
          img: "https://placeholder.it/40x40",
          company: "Djamo",
          description:
            "Une carte gratuite a partir du 02 decembre jusqu'au 24 decembre 2023",
          webisteLink: "https://djamo.ci",
          isActive: false,
          _id: "40ufbhv88ywdi0fkdm",
        },
      ],
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAds,
};
