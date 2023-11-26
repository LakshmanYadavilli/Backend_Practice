const { paramsError } = require("../validators/currencies.validators");
const validateCurrencyParams = (req, res, next) => {
  const error = paramsError({ id: req.params.id });
  if (error) {
    return res.status(423).send(error.message);
  }
  next();
};

module.exports = { validateCurrencyParams };
