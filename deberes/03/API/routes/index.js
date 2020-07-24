const express = require("express");
const router = express.Router();
const cartoonController = require("../controllers/cartoonController");

module.exports = () => {
    // En el inicio
    router.get("/", () => console.log("En Home"));
    // Agregar nuevos Catoons
    router.post("/cartoons", cartoonController.nuevoCartoon);
    // Obtener todos los Cartoons
    router.get("/cartoons", cartoonController.obtenerCartoons);
    // Obtener un  Cartoon
    router.get("/cartoons/:id", cartoonController.obtenerCartoon);
    // Actualizar un Cartoon
    router.put("/cartoons/:id", cartoonController.actualizarCartoon);
    // Eliminar un Cartoon
    router.delete("/cartoons/:id", cartoonController.eliminarCartoon);
    return router;
}

