var express = require('express');
require("./Models/user")
require("./Models/employInfo")
const cors = require("cors");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var app = express();
app.use(cors());
const user = require('./Routes/user')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user" , user);
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.clear();
  console.log(`server running on port ${port}`);
});



var conn = mongoose
	.connect("mongodb+srv://sulaman:sulaman@cluster0.7bi09.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to mongoDB!"))
	.catch((err) => console.log("Could not connect to mongoDB... \n", err));
	// mongodb+srv://USER1:USER1@cluster0.xkczw.mongodb.net/ShiftCalender?retryWrites=true&w=majority http://localhost:2707/sportDB
module.exports = app;
