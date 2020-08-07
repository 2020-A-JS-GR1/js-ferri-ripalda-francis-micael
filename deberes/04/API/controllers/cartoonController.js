const Cartoon = require("../models/cartoonSchema");
const Fs = require("fs");

const path = "./data/cartoons.json";


// Guardar un nuevo cartoon
exports.nuevoCartoon = async (req, res, next) => {
    try {
        const cartoon = new Cartoon(req.body);
        if (validarCartoon(cartoon)){
            await cartoon.save();
            guardarCartoons();
            res.json({mensaje: "El cartoon fue agregado correctamente"});
        } else {
            res.json({mensaje: "Datos incorrectos"});
        }
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

// Obtener cartoon por su id
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
        if (validarCartoon(req.body)){
            const cartoon = await Cartoon.findOneAndUpdate(
                {_id: req.params.id}, 
                req.body, 
                {new: true}
            );
            guardarCartoons();
            res.json(cartoon);
        } else {
            res.json({mensaje: "Datos incorrectos"});
        }
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
        guardarCartoons();
        res.json({mensaje: "Se elimino el Cartoon"});
    } catch (error){
        res.json({mensaje: "No se pudo eliminart el cartoon"});
        console.log(error);
        next();
    }
} 

// Guardar en archivo de Texto
guardarCartoons = () => {
    Cartoon.find({})
        .then(cartoons => {
            Fs.writeFile(path, JSON.stringify(cartoons), "utf-8", 
                (error) => {
                    if (error) {
                        console.log("No se pudo guardar");
                    }
                }
            )
        })
}

// Validar datos de un nuevo cartoon
function validarCartoon(cartoon){
    if (!(cartoon.titulo && cartoon.productora && cartoon.anioEstreno && cartoon.clasificacion && cartoon.director && cartoon.personajes)){
        return false;
    } else {
        if (typeof cartoon.anioEstreno !== "number"){
            return false;
        } else {
            cartoon.personajes.forEach(personaje => {
                if (!(personaje.nombre, personaje.edad, personaje.descripcionFisica, personaje.descripcionPsicologica, personaje.rol)){
                    return false;
                } else {
                    if (typeof personaje.edad !== "number"){
                        return false;
                    }
                }
            });
        }
    }
    return true;
}