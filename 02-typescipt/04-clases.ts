class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = "Humano";
    protected nombreYApellido: string = "";

    constructor(
        nombreParametro: string,
        apellidoParametro: string
    ){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + " " + this.apellido;
    }

    private mostrarNombreApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreparametro: string,
        apellidoParametro: string,
        public cedula: string,
        public estadoCivil: string
    ) {
        super(nombreparametro, apellidoParametro);
    }
}

const francis = new Usuario(
    "Francis",
    "Ferri",
    "1726849217",
    "soltero"
);

console.log(francis.nombre);
console.log(francis.apellido);
console.log(francis.cedula);
console.log(francis.estadoCivil);

