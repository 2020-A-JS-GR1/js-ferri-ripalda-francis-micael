/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: "string",
      required: true,
    },
    // Relaciones
    // Pokemon <- Usuario
    usuario: { // Nombre FK
      model: "Usuario",
      required: true, // requeridad 1-N
                      // Opcional 0 - N
    },
    batallas: {
      collection: "Batalla",
      via: "pokemon"

    }

  },

};

