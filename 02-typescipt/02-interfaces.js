// 02-interfaces.ts
var _this = this;
var francis = {
    nombre: "Francis",
    apellido: "Ferri",
    casado: 0,
    sueldo: 12.2,
    estado: "BN",
    imprimirUsuario: function (mensaje) {
        return "El mensaje es: " + mensaje;
    },
    calcularImpuesto: function (sueldo, impuesto) {
        if (_this.sueldo) {
            sueldo = _this.sueldo;
        }
        return sueldo + (sueldo * impuesto);
    },
    estadoActual: function () {
        switch (_this.estado) {
            case "AC":
                return "AP";
                break;
            case "IN":
                return "AF";
                break;
            case "BN":
                return "AT";
                break;
        }
        ;
    }
};
//francis.imprimirUsuario()
