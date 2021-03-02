const { Schema, model } = require("mongoose");

const PurchaseSchema = Schema({
  total: {
    type: Number,
    required: true,
  },
  products: {
    type: Array,
    required: true,
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

module.exports = model("purchase", PurchaseSchema);