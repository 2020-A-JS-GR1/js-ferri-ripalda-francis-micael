const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cartoon-personajes",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// Crear el servidor
const app = express();

// Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar el routing
app.use("/", routes());

app.listen(4000, () => console.log("Servidor funcionando"));