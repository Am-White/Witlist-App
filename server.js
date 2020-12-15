//Dependencies
//=================
const express = require("express");
const path = require("path");

//Setting up Express
//=================
const app = express();
const PORT = process.env.PORT || 3000 ;

//Express and data parsing??
//=================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes???
//=================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./view.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

//Listener
//=================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});