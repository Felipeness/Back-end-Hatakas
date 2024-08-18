import express, { json } from "express";
const app = express();
import canvasRoutes from "./routes/canvasRoutes";

// Middleware para parsear JSON
app.use(json());

// Rotas
app.use("/api/canvas", canvasRoutes);

// Middleware de tratamento de erros
import errorHandler from "./middlewares/errorHandler";
app.use(errorHandler);

export default app;
