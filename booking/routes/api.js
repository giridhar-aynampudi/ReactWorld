const express = require("express");
const testModel = require("../models/test");
const router = express.Router();

router.get("/test", (req, res) => {
  testModel
    .find({})
    .then((data) => {
      console.log(data);
      // res.send(data)
    })
    .catch((e) => console.log("DB error", e));
});

router.post("/save", (req, res) => {
  console.log("Data body:", req.body);
  const data = req.body;
  res.json({ msg: "Data received by server" });
  //   const saveTest = new testModel(data);
  //   saveTest.save((e) => {
  //     if (e) {
  //       res.send(500).json({ msg: "Internal server error" });
  //       return;
  //     }
  //     return res.join({
  //       msg: "Data received by server",
  //     });
  //   });
});

module.exports = router;
