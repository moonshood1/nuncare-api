const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    mongoose.set("debug", (collectionName, method, query, doc) => {
      const formattedQuery = JSON.stringify(query).replace(/\"/g, " ");
      console.log(
        `\x1b[34mMongoose:\x1b[0m ${collectionName}.${method}(${formattedQuery})`
      );
    });

    console.log(`Database connected : ${conn.connection.db.databaseName}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
