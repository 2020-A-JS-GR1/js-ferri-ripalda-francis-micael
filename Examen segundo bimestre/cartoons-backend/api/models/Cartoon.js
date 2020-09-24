/**
 * Cartoon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  tableName: "cartoon",

  attributes: {
    titulo: {
      type: "string",
      required: true,
      columnName: "titulo",
      unique: true,
      minLength: 3,
      maxLength: 45
    },
    productora : {
      type: "string",
      required: true,
      columnName: "productora",
      minLength: 3,
      maxLength: 45
    },
    anioEstreno: {
      type: "number",
      required: true,
      columnName: "anio_estreno"
    },
    clasificacion: {
      type: "string",
      columnName: "clasificacion",
      isIn: ["A", "B", "C"],
      defaultsTo: "B"
    },
    director: {
      type: "string",
      required: true,
      columnName: "director",
      minLength: 3,
      maxLength: 45
    },
    personajes: {
      collection: "Personaje",
      via: "cartoon"
    }
  }

};

