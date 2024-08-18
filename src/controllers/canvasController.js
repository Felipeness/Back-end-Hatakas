const canvasService = require("../services/canvasService");

exports.saveConfig = async (req, res) => {
  try {
    const config = req.body;
    await canvasService.saveConfig(config);
    res.status(200).send("Configurações salvas com sucesso");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.saveCanvas = async (req, res) => {
  try {
    const canvasData = req.body;
    await canvasService.saveCanvas(canvasData);
    res.status(200).send("Estado do canvas salvo com sucesso");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loadCanvas = async (req, res) => {
  try {
    const canvasId = req.params.id;
    const canvas = await canvasService.loadCanvas(canvasId);
    res.status(200).json(canvas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
