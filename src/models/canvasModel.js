const mongoose = require("mongoose");

const canvasSchema = new mongoose.Schema({
  config: {
    type: Object,
    required: true,
  },
  state: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Canvas", canvasSchema);
