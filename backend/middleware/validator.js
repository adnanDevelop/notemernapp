const validator = (validationSchema) => async (req, res, next) => {
  try {
    const validateData = await validationSchema.parseAsync(req.body);
    req.body = validateData;
    next();
  } catch (err) {
    const status = 400;
    const message = err.errors[0].message;
    const errors = {
      status,
      message,
    };
    next(errors);
  }
};

module.exports = validator;
