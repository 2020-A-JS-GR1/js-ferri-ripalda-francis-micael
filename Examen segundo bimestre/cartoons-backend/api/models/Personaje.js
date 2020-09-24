/**
 * Personaje.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "personaje",

  attributes: {
    nombre: {
      type: "string",
      required: true,
      columnName: "nombre"
    },
    edad: {
      type: "number",
      columnName: "edad"
    },
    descripcionFisica: {
      type: "string",
      required: true,
      columnName: "descripcion_fisica",
      minLength: 3,
      maxLength: 45
    },
    descripcionPsicologica: {
      type: "string",
      columnName: "descripcion_psicologica",
      minLength: 3,
      maxLength: 45
    },
    rol: {
      type: "string",
      required: true,
      columnName: "rol",
      minLength: 3,
      maxLength: 45
    },
    cartoon: {
      model: "Cartoon",
      required: false
    }
  }

};

