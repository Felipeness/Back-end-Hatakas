import { Schema, model } from "mongoose";

const canvasSchema = new Schema({
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

export default model("Canvas", canvasSchema);
