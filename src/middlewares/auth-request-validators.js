const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Something went wrong",
      error: "Missing Email or Password in request ",
    });
  }

  next();
};

const validateIsAdminRequest = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Something went wrong",
      error: "User id is not given",
    });
  }

  next();
};

module.exports = {
  validateUserAuth,
  validateIsAdminRequest,
};
