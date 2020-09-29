const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));

app.listen(PORT, console.log(`Server is listening at ${PORT}`));
