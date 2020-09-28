const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

//HTTP request logger
app.use(morgan("tiny"));

app.get("/api/name", (req, res) => {
  const data = {
    username: "giridhar",
    age: 23,
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is listening at ${PORT}`));
