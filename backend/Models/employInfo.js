const mongoose = require("mongoose");

const EmployInfo = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  address: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
  },
  birthday: {
    type: String,
    required: true,
  },
  issuedate: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("EmployInfo", EmployInfo);