const Cartoon = require("../models/cartoonSchema");
const Fs = require("fs");

// Guardar un nuevo cartoon
exports.nuevoCartoon = async (req, res, next) => {
    try {
        // TODO: Validar Campos
        const cartoon = new Cartoon(req.body);
        await cartoon.save();
        res.json({mensaje: "El cartoon fue agregado correctamente"});
    } catch(error) {
        res.json({mensaje: "El cartoon no pudo ser agregado"});
        console.log(error);
        next();
    }
}

// Obtener todos los cartoons
exports.obtenerCartoons = async (req, res, next) => {
    try{
        const cartoons = await Cartoon.find({});
        res.json(cartoons);
    } catch (error){
        res.json({mensaje: "No se pudo recuperar los registros de cartoons"});
        console.log(error);
        next();
    }
}

// Obtener cartton por su id
exports.obtenerCartoon = async (req, res, next) => {
    try{
        const cartoon = await Cartoon.findById(req.params.id);
        res.json(cartoon);
    } catch (error){
        console.log(error);
        res.json({mensaje: "No se pudo obtener el cartoon con ese ID"});
        next();
    }
}

// Actualizar un Caroon
exports.actualizarCartoon = async (req, res, next) => {
    try {
        // TODO: Validar Campos
        const cartoon = await Cartoon.findOneAndUpdate(
            {_id: req.params.id}, 
            req.body, 
            {new: true}
        );
        res.json(cartoon);
    } catch (error) {
        console.log(error);
        res.json({mensaje: "No se pudo actualizar el cartoon"});
        next();
    }
}

// Eliminar Cartoon
exports.eliminarCartoon = async (req, res, next) => {
    try{
        await Cartoon.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: "Se elimino el Cartoon"});
    } catch (error){
        res.json({mensaje: "No se pudo eliminart el cartoon"});
        console.log(error);
        next();
    }
} 

// Guardar en archivo de Texto
guardarCartoons = () => {
    let cartoons = new Promise((resolve, reject) => {

    })
    
    Cartoon.find({})
    Fs.writeFile()
    try{
        const cartoons = await ;
        // TODO: Guardar en archivo
    } catch (error){
        console.log(error);
    }
}