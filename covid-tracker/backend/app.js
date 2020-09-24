const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/newEndPoint", (req, res) => res.send("This the new api"));
app.listen(port, () => console.log(`the app listening at port ${port}`));
