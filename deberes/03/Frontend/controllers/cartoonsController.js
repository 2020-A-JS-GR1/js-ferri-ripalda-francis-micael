const axios = require("axios");
const inquirer = require("inquirer");
const Cartoon = require("../models/cartoon");

const urlAPI = "http://localhost:4000/";
const clienteAxios = axios.create({baseURL: urlAPI});

async function obtenerCartoons(){
    try{
        const contenido = await clienteAxios.get("cartoons");
        const cartoons = contenido.data;
        console.log("LISTA DE CARTOONS");
        cartoons.forEach(datosCartoon => {
            const cartoon = new Cartoon(datosCartoon);
            cartoon.imprimirCartoon()
        });
    } catch(error){
        console.log(error);
    }   
}

async function verCartoon(){
    let respuesta = await inquirer.prompt({
        name: "id",
        message: "Ingrese el ID del cartoon que desea ver"
    });
    let id = respuesta.id;
    if(id){
        try{
            const contenido = await clienteAxios.get(`cartoons/${id}`);
            if(contenido.data === null){
                console.log("No se encotro un cartoon con ese ID");
                return;
            }
            if (contenido.data.mensaje){
                console.log(contenido.data.mensaje);
            } else {
                const cartoon = new Cartoon(contenido.data);
                cartoon.imprimirCartoon();
            }
        } catch (error){
            console.log(error);
        }
    }
}

async function agregarCarton(){
    let datosCartoon = await ingresarDatosCartoon();
    let cartoon = new Cartoon(datosCartoon);
    let validado = cartoon.validarCartoon();
    if (validado){
        try{
            const respuesta = await clienteAxios.post("/cartoons", cartoon);
            console.log(respuesta.data);
        } catch (error){
            console.log(error);
        }
    }
}

async function actualizarCartoon(){
    let respuesta = await inquirer.prompt({
        name: "id",
        message: "Ingrese el ID del cartoon que desea actualizar"
    });
    let id = respuesta.id;
    if(id){
        let datosCartoon = await ingresarDatosCartoon();
        let cartoon = new Cartoon(datosCartoon);
        let validado = cartoon.validarCartoon();
        if (validado){
            try{
                const respuesta = await clienteAxios.put(`cartoons/${id}`, cartoon);
                console.log(respuesta.data);
            } catch (error){
                console.log(error);
            }
        }
    }
}

async function borrarCartoon(){
    let respuesta = await inquirer.prompt({
        name: "id",
        message: "Ingrese el ID del cartoon a borrar"
    });
    let id = respuesta.id;
    if(id){
        try {
            await clienteAxios.delete(`/cartoons/${id}`)
            console.log(`Se ha eliminado el cartoon ${id}`);
        } catch (error){
            console.log(error);
        }
    }
}

// Formularios
async function ingresarDatosCartoon(){
    let cartoon = await inquirer.prompt(
        [
            {
                name: "titulo",
                message: "Ingrese el titulo del cartoon"
            },
            {
                name: "productora",
                message: "Ingrese la productora del cartoon"
            },
            {
                name: "anioEstreno",
                message: "Ingrese el año de estreno del cartoon"
            },
            {
                type: "rawlist",
                name: "clasificacion",
                message: "Ingrese la clasificacion del cartoon",
                choices: [
                            "Apto para todo publico",
                            "Bajo supervicion de un adulto",
                            "Solo para adultos"
                        ],
                default: "Apto para todo publico"
            },
            {
                name: "clasificacion",
                message: "Ingrese la clasificacion del cartoon"
            },
            {
                name: "director",
                message: "Ingrese el director del cartoon"
            }
        ]
    );
    cartoon.anioEstreno = Number(cartoon.anioEstreno);
    cartoon.personajes = await ingresarDatosPersonaje();
    return cartoon;
}

async function ingresarDatosPersonaje(){
    let personajes = [];
    console.log("Agregando un personaje");
    let personaje = await inquirer.prompt([
        {
            name: "nombre",
            message: "Ingrese el nombre del personaje"
        },
        {
            name: "edad",
            message: "Ingrese la edad del personaje"
        },
        {
            name: "descripcionFisica",
            message: "Ingrese la descripcion fisica del personaje"
        },
        {
            name: "descripcionPsicologica",
            message: "Ingrese la descripcion psicologica del personaje"
        },
        {
            name: "rol",
            message: "Ingrese el rol del personaje"
        },

    ]);
    personaje.edad = Number(personaje.edad);
    personajes.push(personaje);

    let respuesta = await inquirer.prompt({
        name: "nuevo",
        message: "Quiere agregar un nuevo personaje (escriba y)"
    });

    if (respuesta.nuevo === "y"){
        let masPersonajes = await ingresarDatosPersonaje();
        personajes = personajes.concat(masPersonajes);
    }
    return personajes;
}

module.exports = {obtenerCartoons, verCartoon, agregarCarton, actualizarCartoon, borrarCartoon};