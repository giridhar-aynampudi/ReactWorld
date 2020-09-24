const express = require("express");
var request = require("request");
const app = express();

const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/newEndPoint", (req, res) => res.send("This the new api"));

app.get("/getWeathertoronto", (req, res) => {
  request(
    "http://api.apixu.com/v1/current.json?key=36272f88f57b49d9b0d04252191905&q=Toronto",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //   console.log(body);
      }
    }
  );
});

app.listen(port, () => console.log(`the app listening at port ${port}`));
