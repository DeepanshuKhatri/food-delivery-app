const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/itemRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRotues = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mealPlanning");

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/items", itemRoutes);
app.use("/order", orderRoutes);
app.use("/user", userRotues);

app.listen(process.env.PORT, () => {
  console.log(`server started at port: ${process.env.PORT}`);
});
