const config = require('config');

const authenticate = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (authHeader === config.get('internalAccessToken')) {
    return next();
  }
  return res.unauthorized({});
}

module.exports = { authenticate };
