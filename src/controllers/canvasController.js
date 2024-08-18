import { saveConfig, saveCanvas, loadCanvas } from "../services/canvasService";

export async function saveConfig(req, res) {
  try {
    const config = req.body;
    await saveConfig(config);
    res.status(200).send("Configurações salvas com sucesso");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function saveCanvas(req, res) {
  try {
    const canvasData = req.body;
    await saveCanvas(canvasData);
    res.status(200).send("Estado do canvas salvo com sucesso");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function loadCanvas(req, res) {
  try {
    const canvasId = req.params.id;
    const canvas = await loadCanvas(canvasId);
    res.status(200).json(canvas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
