const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartoonSchema = new Schema({
    titulo: {
        type: String,
        trim: true,
        required: true
    },
    productora: {
        type: String,
        trim: true,
        required: true
    },
    anioEstreno: {
        type: Number,
        required: true
    },
    clasificacion: {
        type: String,
        trim: true,
        required: true
    },
    director: {
        type: String,
        trim: true,
        required: true
    },
    personajes: {
        type: [{
            nombre: {type: String, trim: true, required: true},
            edad: Number,
            descripcionFisica: {type: String, trim: true, required: true},
            descripcionPsicologica: {type: String, trim: true},
            rol: {type: String, trim: true}
        }],
        required: true
    }
});

module.exports = mongoose.model("Cartoon", CartoonSchema);