const errorHandler = (req, res) => {
  res.status(404).json({
    status: "error",
    message: "The requested resource was not found",
  });
};

module.exports = errorHandler;
