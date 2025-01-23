const Joi = require("joi");

module.exports = {
  validatorCreateProducts: (req, res, next) => {
    try {
      console.log(req.body);
      const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        category: Joi.string().required(),
        stock: Joi.number().required(),
      });
      const validatorError = schema.validate(req.body).error;
      console.log(validatorError);
      if (validatorError) {
        return res
          .status(400)
          .json(`Error : ${validatorError.details[0].message}`);
      }
      next();
    } catch (error) {
      next(error);
    }
  },
  validatorUpdateProducts: (req, res, next) => {
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        category: Joi.string().required(),
        stock: Joi.number().required(),
      });
      const validatorError = schema.validate(req.body).error;
      if (validatorError) {
        return res
          .status(400)
          .json(`Error : ${validatorError.details[0].message}`);
      }
      next();
    } catch (error) {
      next(error);
    }
  },
};
