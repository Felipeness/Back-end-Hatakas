const Canvas = require("../models/canvasModel");

exports.saveConfig = async (config) => {
  // Lógica para salvar configurações no banco de dados
  // Exemplo: const newConfig = new Canvas(config);
  // await newConfig.save();
};

exports.saveCanvas = async (canvasData) => {
  // Lógica para salvar o estado do canvas no banco de dados
  const canvas = new Canvas(canvasData);
  await canvas.save();
};

exports.loadCanvas = async (canvasId) => {
  // Lógica para carregar um estado salvo do canvas
  return await Canvas.findById(canvasId);
};
