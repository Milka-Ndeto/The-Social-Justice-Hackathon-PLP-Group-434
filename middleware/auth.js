// middleware/auth.js
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

const requireAuth = (req, res, next) => {
  if (!req.auth) {
    // Redirect to the home page or an error page
    return res.redirect('/');
  }
  next();
};

module.exports = { requireAuth };
