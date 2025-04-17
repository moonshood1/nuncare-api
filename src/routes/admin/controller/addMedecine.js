const Medecine = require("../../../models/Medecine");
const XLSX = require("xlsx");

const addMedecine = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file)
      return res
        .status(400)
        .json({ success: false, message: "Aucun fichier envoyé" });

    const workbook = XLSX.read(file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const codes = data.map((item) => String(item.code));
    const existingMedecines = await Medecine.find({ code: { $in: codes } });

    const existingCodes = new Set(
      existingMedecines.map((med) => String(med.code))
    );

    const medecinesToInsert = [];

    console.log({ data });

    for (const item of data) {
      const currentCode = String(item.code);

      if (existingCodes.has(currentCode)) {
        console.log(
          `Le médicament avec le code ${currentCode} existe déjà, import annulé`
        );
        continue;
      }

      medecinesToInsert.push({
        name: item.name,
        code: currentCode,
        group: item.group,
        dci: item.dci,
        regime: item.regime,
        category: item.category,
        price: Number(item.price),
      });
    }

    if (medecinesToInsert.length === 0) {
      return res.status(400).json({
        success: false,
        message:
          "Aucun médicament n'a été importé, tous les médicaments existent déjà dans la base.",
      });
    }

    const inserted = await Medecine.insertMany(medecinesToInsert);

    return res.status(200).json({
      success: true,
      message: `${inserted.length} médicament(s) importé(s) avec succès.`,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Une erreur s'est produite lors de l'import des médicaments",
    });
  }
};

module.exports = { addMedecine };
