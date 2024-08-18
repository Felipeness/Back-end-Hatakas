import Canvas from "../models/canvasModel";

export async function saveConfig(config) {
  // Lógica para salvar configurações no banco de dados
  // Exemplo: const newConfig = new Canvas(config);
  // await newConfig.save();
}

export async function saveCanvas(canvasData) {
  // Lógica para salvar o estado do canvas no banco de dados
  const canvas = new Canvas(canvasData);
  await canvas.save();
}

export async function loadCanvas(canvasId) {
  // Lógica para carregar um estado salvo do canvas
  return await Canvas.findById(canvasId);
}
