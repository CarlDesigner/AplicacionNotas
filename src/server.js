const express = require("express");
const path = require("path");

//Inicializacion
const app = express();


//Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "/wiews"));


//Middlewares
app.use(express.urlencoded({ extended: false }));


//Global Variables


//Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//Static Files
app.use(express.static(path.join(__dirname, "public")));



module.exports = app;
