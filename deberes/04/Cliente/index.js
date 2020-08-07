const inquirer = require("inquirer");
const cartoonController = require("./controllers/cartoonsController");

// Aplicacion
menuPrincipal();

// Menus
async function menuPrincipal(){
    const menu = `
Escoja una opcion
    1. Ver todos los cartoons
    2. Ver un cartoon
    3. Añadir un cartoon
    4. Actualizar un cartoon
    5. Borrar un cartoon
    6. Salir
`;
    let respuesta = await inquirer.prompt({
        name: "opcion",
        message: menu,
        })
    let opcion = respuesta.opcion;
    switch(opcion){
        case "1":
            //Ver todos los cartoons
            await cartoonController.obtenerCartoons();
            break;
        case "2":
            // Ver un cartoon
            await cartoonController.verCartoon();
            break;
        case "3":
            // Añadir un cartoon
            await cartoonController.agregarCarton();
            break;
        case "4":
            // Actualizar un cartoon
            await cartoonController.actualizarCartoon();
            break;
        case "5":
            // Borrar un cartoon
            await cartoonController.borrarCartoon();
            break;
        case "6":
            console.log("Gracias Vuelva pronto");
            break;
        default:
            console.log("Opcion no valida");
    }
    if (opcion !== "6")
        menuPrincipal();
}
   

