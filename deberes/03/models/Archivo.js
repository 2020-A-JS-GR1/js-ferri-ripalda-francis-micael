class Archivo{
    constructor(ruta){
        this.ruta = ruta;
        this.cargarArchivo();
    }

    cargarArchivo(){
        console.log(this.ruta);
        this.contenido = [];
    }
    
    obtenerDatos(){
        
        // TODO Devolver los datos
    }
    
    guardarDatos(){

    }
}

module.exports = Archivo;