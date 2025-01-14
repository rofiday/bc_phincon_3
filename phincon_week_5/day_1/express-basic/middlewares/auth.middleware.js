//cara langsung export
module.exports = {
  auth: (req, res, next) => {
    console.log("Auth Middleware");
    next();
  },
};
//
