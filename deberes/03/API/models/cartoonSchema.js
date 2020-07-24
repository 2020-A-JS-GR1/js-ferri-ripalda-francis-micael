const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartoonSchema = new Schema({
    titulo: {
        type: String,
        trim: true
    },
    productora: {
        type: String,
        trim: true
    },
    anioEstreno: Number,
    clasificacion: {
        type: String,
        trim: true
    },
    director: {
        type: String,
        trim: true
    },
    personajes: [{
        nombre: {type: String, trim: true},
        edad: Number,
        descripcionFisica: {type: String, trim: true},
        descripcionPsicologica: {type: String, trim: true},
        rol: {type: String, trim: true}
    }]
});

module.exports = mongoose.model("Cartoon", CartoonSchema);