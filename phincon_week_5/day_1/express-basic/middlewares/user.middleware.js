//cara langsung export
const Joi = require("joi");

module.exports = {
  checkUser: (req, res, next) => {
    console.log("Check User Middleware");
    next();
  },
  validationCreateUser: (req, res, next) => {
    try {
      const schema = Joi.object({
        username: Joi.string().min(3).required(),
      });
      //valdiasi error
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
  validatiionUpdateUser: (req, res, next) => {
    try {
      const schema = Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
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
  validationDeleteUser: (req, res, next) => {
    try {
      const schema = Joi.object({
        id: Joi.number().required(),
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
//
