const validator = require("validator");
const Joi = require("joi");
const stringValdiation = (value, helper) => {
  if (!validator.isAlpha(value)) {
    return helper.message("Id Must not be a Number");
  }
};
const paramsSchema = Joi.object().keys({
  id: Joi.string().custom(stringValdiation),
});
const paramsError = (data) => {
  const result = paramsSchema.validate(data);

  return result.error;
};
module.exports = { paramsError };
