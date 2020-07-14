class Cartoon{
    constructor(id, titulo, productora, anioEstreno, clasificacion, director, personajes){
        this.id = id;
        this.titulo = titulo;
        this.productora = productora;
        this.anioEstreno = anioEstreno;
        this.clasificacion = clasificacion;
        this.director = director;
        this.personajes = personajes;
        this.imprimirCartoon();
    }

    imprimirCartoon(){
        console.log(
            `
            ID: ${this.id}
            Titulo de la Caricatura: ${this.titulo}
            Productora: ${this.productora}
            Año de estreno: ${this.anioEstreno}
            Clasifficacion: ${this.clasificacion}
            Director: ${this.director}
            Personajes: ${this.personajes}
            `
        )
    }
}

module.exports =  Cartoon;