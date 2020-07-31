const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:5050/cartoon-personajes",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// Crear el servidor
const app = express();


// Configurar cors
const listaPermitidoos = ["http://localhost:3000"];
const corsOptions = {
    origin: (origin, callback) => {
        const existe =listaPermitidoos.some(dominio => dominio === origin);
        if (existe){
            callback(null, true);
        } else {
            callback(new Error("No se encuentra en la lista de permitidos"));
        }
    }
}
// Habilitar CORS
//app.use(cors(corsOptions)); // con opciones de seguridad
app.use(cors()); 


// Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar el routing
app.use("/", routes());

app.listen(4000, () => console.log("Servidor funcionando"));