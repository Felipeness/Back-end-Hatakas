require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const port = process.env.PORT || 3000;

// Conectar ao banco de dados
connectDB();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
