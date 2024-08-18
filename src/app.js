const express = require("express");
const app = express();
const canvasRoutes = require("./routes/canvasRoutes");

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use("/api/canvas", canvasRoutes);

// Middleware de tratamento de erros
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

module.exports = app;
