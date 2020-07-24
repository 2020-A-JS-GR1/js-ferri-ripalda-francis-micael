class Personaje{
    constructor(nombre, edad,  descripcionFisica, descripcionPsicologica, rol){
        this.nombre = nombre;
        this.edad = edad;
        this.descripcionFisica = descripcionFisica;
        this.descripcionPsicologica = descripcionPsicologica;
        this.rol = rol;
    }

    imprimirPersonaje(){
        console.log(
            `
            Nombre: ${this.nombre}
            Edad: ${this.edad}
            Descripción Fisica: ${this.descripcionFisica}
            Descripcion Psicologica: ${this.descripcionPsicologica}
            Rol: ${this.rol}
            `
        )
    }
}

modules.exports = Personaje;