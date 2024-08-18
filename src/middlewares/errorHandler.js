const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Ocorreu um erro no servidor" });
};

export default errorHandler;
