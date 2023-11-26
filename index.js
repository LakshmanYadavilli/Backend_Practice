require("dotenv").config();
const express = require("express");
const CurrenciesRoutes = require("./routes/currencies.routes");
const { verifyAuth } = require("./middlewares/verifyAuth");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users.routes");

const app = express();
app.use(express.json());
// const con = mongoose.connection;
mongoose.connect("mongodb://localhost:27017/user");
mongoose.connection.on("open", () => {
  console.log("DB Connected");
});
// con.on("close", () => {
//   console.log("DB Connection closed ");
// });

app.use(verifyAuth);
app.use("/currencies", CurrenciesRoutes);
app.use("/user", usersRoutes);

app.listen(3001, () => {
  console.log("Server listened on Port:3001");
});
