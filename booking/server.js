const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/api");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb://localhost/testDB", {
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
