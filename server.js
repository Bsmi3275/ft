//Dependencies, add more here later
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Express part/port
const app = express ();
var PORT = process.env.PORT || 8080;

const db = require("./models");
const HTMLroutes = require("./routes/html-routes");
const APIroutes = require("./routes/api-routes");

//using css, js, etc.
app.use(express.static("public"));
//Express hookup with everything else 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Dearest Morgan, ...
app.use(logger("dev"));

mongoose.connect(
    process.env.MONGODB_URI || 
"mongodb://localhost/workouts", 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

//calling the routes
app.use(require("./routes/html-routes"));
app.use(require("./routes/api-routes"));

//PORT function
app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});