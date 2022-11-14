const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.send("Oops, something went wrong.");
};

module.exports = errorHandler;
