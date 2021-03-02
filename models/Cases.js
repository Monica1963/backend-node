const { Schema, model } =require("mongoose");

const CaseSchema = Schema({
    title : {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        default: "new",
    },
    modulo: {
        type: String,
        required: true,
    },
    validaciones: {
        type: String,
        required: true,
    },
    enabled: {
        type: Boolean,
        default: true,
    },
    evidencia: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    ts_create : {
        type: Date,
        default: Date.now,
    },
});

module.exports = model("cases", CaseSchema);