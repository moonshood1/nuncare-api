const {
  generatePharmacyUniqueCode,
  updatePharmacyCode,
} = require("../../../helpers");
const Pharmacy = require("../../../models/Pharmacy");
const PharmaCode = require("../../../models/PharmaCode");
const _ = require("lodash");
const XLSX = require("xlsx");

const addPharmacy = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) {
      return res
        .status(400)
        .json({ success: false, message: "Aucun fichier envoyé" });
    }

    const workbook = XLSX.read(file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const names = data.map((item) => item.name);
    const existingPharmacies = await Pharmacy.find({ name: { $in: names } });
    const existingNames = new Set(
      existingPharmacies.map((pharma) => pharma.name)
    );

    console.log({ data });

    const pharmaciesToInsert = [];

    let lastIndex = await generatePharmacyUniqueCode();
    if (isNaN(lastIndex)) lastIndex = 0;

    for (const item of data) {
      if (existingNames.has(item.name)) {
        console.log(`La pharmacie "${item.name}" existe déjà, import annulé`);
        continue;
      }

      lastIndex += 1;

      pharmaciesToInsert.push({
        name: item.name,
        code: `PHARMA-${lastIndex}`,
      });
    }

    if (pharmaciesToInsert.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Aucune pharmacie n'a été importée, toutes existent déjà.",
      });
    }

    const inserted = await Pharmacy.insertMany(pharmaciesToInsert);

    await updatePharmacyCode(lastIndex);

    return res.status(200).json({
      success: true,
      message: `${inserted.length} pharmacie(s) importée(s) avec succès.`,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { addPharmacy };
