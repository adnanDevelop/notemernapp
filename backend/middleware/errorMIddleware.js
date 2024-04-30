const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 402;
  const message = err.message;
  return res.status(status).json({ message });
};

module.exports = errorMiddleware;
