const Cartoon = require("../models/Cartoon");
const Archivo = require("../models/Archivo");

class CartoonController{
    constructor(){
        this.archivo = new Archivo("../data/cartoons.txt");
        this.listaCartoons = this.archivo.contenido; // Se enlazaron
    }

    agregarCartoon(titulo, productora, anioEstreno, clasificacion, director, personajes){
        let id = this.listaCartoons.length;
        let cartoon = new Cartoon(id, titulo, productora, anioEstreno, clasificacion, director,personajes);
        // TODO: Guardar en el archivo
        this.listaCartoons.push(cartoon);
        return id;
    }

    mostrarCartoon(id){
        
    }

    //actualizarCartoon(){}

    //eliminarCartoon(id){}
}

const cartoonController = new CartoonController();
let id1 = cartoonController.agregarCartoon("titulo", "productora", "anioEstreno", "clasificacion", "director", "personajes");
console.log("ID: ",id1);
