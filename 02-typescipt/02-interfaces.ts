// 02-interfaces.ts

interface Usuario  {
    nombre: string;
    apellido: string;
    edad?: number; //Opcional
    sueldo?: number; // Opcional
    casado: boolean | 0 | 1;
    estado: "AC" | "IN" | "BN"
    imprimirUsuario: (mensaje: string) => string;
    // parametros numero impuesto, sueldo + sueldo * porcentaje
    calcularImpuesto: (sueldo: number, impuesto: number) => number;
    // no reciba parametros, "AP", "AF", "AT"
    estadoActual: () => "AP" | "AF" | "AT"
}

const francis: Usuario = {
    nombre: "Francis",
    apellido: "Ferri",
    casado: 0,
    sueldo: 12.2,
    estado: "BN",
    imprimirUsuario: (mensaje)=> {
        return "El mensaje es: " + mensaje;
    },
    calcularImpuesto: (sueldo, impuesto) => {
        if (this.sueldo){
            sueldo = this.sueldo;
        }
        return sueldo + (sueldo * impuesto);
    },
    estadoActual:() => {
        switch (this.estado) {
            case "AC":
                return "AP";
                break;
            case "IN":
                return "AF";
                break;
            case "BN":
                return "AT";
                break;
        };
    }
};


//francis.imprimirUsuario()