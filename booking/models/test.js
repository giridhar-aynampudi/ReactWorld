const mongoose = require("mongoose");

//Schema
const schema = mongoose.Schema;
const testSchema = new schema({
  text: String,
  date: {
    type: String,
    default: Date.now(),
  },
});

//Model
const testModel = mongoose.model("testModel", testSchema);

module.exports = testModel;
