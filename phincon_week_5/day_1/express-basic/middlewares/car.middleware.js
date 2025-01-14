const Joi = require("joi");

module.exports = {
  validationCreateCar: (req, res, next) => {
    try {
      const schema = Joi.object({
        brand: Joi.string().min(3).required(),
        model: Joi.string().min(3).required(),
        price: Joi.number().required(),
      });
      const validationError = schema.validate(req.body).error;
      if (validationError) {
        return res
          .status(400)
          .json("Error : " + validationError.details[0].message);
      }
    } catch (error) {
      next(error);
    }
  },
};
