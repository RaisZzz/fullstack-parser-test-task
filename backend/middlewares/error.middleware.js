function errorMiddleware(err, req, res, next) {

  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    error: {
      status: statusCode,
      message: message
    }
  });
}

module.exports = errorMiddleware;
