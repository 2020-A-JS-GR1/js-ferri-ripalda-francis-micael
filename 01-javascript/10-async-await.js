const promesaLeerArchivo = new Promise();
const promesaEscribirArchivo = new Promise();

// ASYNC AWAIT _> DENTRO DE UNA FUNCION

async function ejercicio() {
    console.log("1");
    try{
        const respuestaLecturaArchivo = await promesaLeerArchivo();
        await  promesaEscribirArchivo();
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
    } catch(error){
        console.log("error", error)
    }
}

const f = async () => {
    // contenido
}