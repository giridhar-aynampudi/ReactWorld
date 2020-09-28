const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

mongoose.connect("mongodb://localhost/practice", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!");
});

// makes request into json and urlencoded and make available in req body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);
app.listen(PORT, console.log(`Server is listening at ${PORT}`));
