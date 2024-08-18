require("dotenv").config();
import app from "./app";
import connectDB from "./config/db";

const port = process.env.PORT || 3000;

// Conectar ao banco de dados
connectDB();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
