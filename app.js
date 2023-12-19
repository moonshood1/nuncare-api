const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const userRouter = require("./src/routes/user");
const authRouter = require("./src/routes/auth");
const resourceRouter = require("./src/routes/resources");
const adminRouter = require("./src/routes/admin");

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/resources", resourceRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
