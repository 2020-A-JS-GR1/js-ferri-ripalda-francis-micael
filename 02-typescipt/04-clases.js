class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombreYApellido = "";
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + " " + this.apellido;
    }
    mostrarNombreApellido() {
        return this.nombreYApellido;
    }
}
Persona.nombreReferencial = "Humano";
class Usuario extends Persona {
    constructor(nombreparametro, apellidoParametro, cedula, estadoCivil) {
        super(nombreparametro, apellidoParametro);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
const francis = new Usuario("Francis", "Ferri", "1726849217", "soltero");
console.log(francis.nombre);
console.log(francis.apellido);
console.log(francis.cedula);
console.log(francis.estadoCivil);
