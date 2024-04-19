const firebaseConfig = require("firebase-admin");

const initializeFirebase = async () => {
  try {
    const serviceAccount = require("../../../firebase-config.json");

    firebaseConfig.initializeApp({
      credential: firebaseConfig.credential.cert(serviceAccount),
    });

    console.log(`Firebase initialized`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = initializeFirebase;
