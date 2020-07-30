class Cartoon{
    constructor(objeto){
        this.id = objeto._id;
        this.titulo = objeto.titulo;
        this.productora = objeto.productora;
        this.anioEstreno = objeto.anioEstreno;
        this.clasificacion = objeto.clasificacion;
        this.director = objeto.director;
        this.personajes = objeto.personajes;
        this.imprimirCartoon();
    }

    // Imprimir Cartoon
    imprimirCartoon(){     
        let cartoonImprimir = `
    -------------------------------------------------
            ID: ${this._id}
            Titulo: ${this.titulo}
            Productora: ${this.productora}
            Director: ${this.director}
            Personajes:`;
            this.personajes.forEach(personaje => {
                cartoonImprimir += `
                Nombre: ${personaje.nombre} - Rol: ${personaje.rol}`
        });
        console.log(cartoonImprimir);
    };

    validarCartoon(){
        if (!(this.titulo && this.productora && this.anioEstreno && this.clasificacion && this.director && this.personajes)){
            return false;
        } else {
            if (typeof this.anioEstreno !== "number"){
                return false;
            } else {
                this.personajes.forEach(personaje => {
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
}

module.exports =  Cartoon;