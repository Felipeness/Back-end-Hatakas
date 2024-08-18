const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Acesso negado. Token não fornecido." });
  }
  // Lógica para verificar o token
  next();
};

module.exports = authMiddleware;
