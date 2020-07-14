class Personaje{
    constructor(nombre, descripcionFisica, descripcionPsicologica, rol, habilidades){
        this.nombre = nombre;
        this.descripcionFisica = descripcionFisica;
        this.descripcionPsicologica = descripcionPsicologica;
        this.rol = rol;
        this.habilidades = habilidades;
    }

    imprimirPersonaje(){
        console.log(
            `
            Nombre: ${this.nombre}
            Descripción Fisica: ${this.descripcionFisica}
            Descripcion Psicologica: ${this.descripcionPsicologica}
            Rol: ${this.rol}
            Director: ${this.director}
            Habilidades: ${this.habilidades}
            `
        )
    }
}

module.exports = Personaje;