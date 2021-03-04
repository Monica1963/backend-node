const { Schema, model } = require("mongoose");

const EscalN2appSchema = Schema({
  fecha: {
    type: Date,
    required: true,
  },
  segmento: {
    type: String,
    required: true,
  },
  modulo: {
    type: String,
    required: true,
  },
  problema: {
    type: String,
    required: true,
  },
  sectorOrigen: {
    type: String,
    required: true,
  },
  incNovum: {
    type: String,
    required: false,
  },
  incRegional: {
    type: String,
    required: false,
  },
  evento: {
    type: Boolean,
    default: false,
  },
  grupoResponsable: {
    type: String,
    required: true,
  },
  proveedor: {
    type: String,
    required: true,
  },
  resolucion: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: "pendiente grupo responsable",
  },
  fechaCierre: {
    type: Date,
    default: '',
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tsCreate: {
    type: Date,
    default: Date.now,
  },
  enable: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("escalN2app", EscalN2appSchema);