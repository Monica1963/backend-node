const { Schema, model } = require("mongoose");

const N2appSchema = Schema({
  fecha: {
    type: Date,
    required: true,
  },
  segmento: {
    type: String,
    enum: [
      'B2B',
      'B2C'
    ],
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
    oneOf: [
      ' MIS',
      'TGT',
      'NOVUM'
    ],
    required: true,
  },
  incNovum: {
    type: String,
    required: false,
    default: 'NA'
  },
  incRegional: {
    type: String,
    required: false,
    default: 'NA'
  },
  evento: {
    type: String,
    default: false,
    default: 'NA'
  },
  grupoResponsable: {
    type: String,
    required: true,
    oneOf: [
      'NOVUM',
      'PLAT_SVA',
      'PLAT_CLOUD',
      'DOX',
      'UX',
      'IDP',
      'MC'
    ],
  },
  comentarios: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    neOf: [
      'Pendiente',
      'Resuelto',
      'Cancelado',
      'Mal Resuelto',
      'Resuelto?'
    ],
    default: "Pendiente grupo responsable",
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

module.exports = model("N2app", N2appSchema);