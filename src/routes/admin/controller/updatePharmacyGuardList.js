const XLSX = require("xlsx");
const Pharmacy = require("../../../models/Pharmacy");
const moment = require("moment");

const formatDateToMongo = (dateString) => {
  return moment(dateString, "DD/MM/YYYY").toDate();
};

const updatePharmacyGuardList = async (req, res, next) => {
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

    const codesFromFile = data.map((item) => item.code);
    const pharmacies = await Pharmacy.find({ code: { $in: codesFromFile } });

    if (pharmacies.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Aucune pharmacie trouvée avec les codes fournis.",
      });
    }

    const updates = [];

    await Pharmacy.updateMany({ isGuard: true }, { $set: { isGuard: false } });

    for (const item of data) {
      const pharmacy = pharmacies.find((p) => p.code === item.code);
      if (!pharmacy) continue;

      const excelTimestamp = item.guardPeriod;

      const guardPeriodDate = new Date((excelTimestamp - 25569) * 86400 * 1000);

      pharmacy.isGuard = true;
      pharmacy.guardPeriod = guardPeriodDate;

      updates.push(pharmacy.save());
    }

    await Promise.all(updates);

    return res.status(200).json({
      success: true,
      message: `${updates.length} pharmacie(s) mise(s) à jour avec succès.`,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { updatePharmacyGuardList };
