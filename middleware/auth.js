<<<<<<< HEAD
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
=======
function requireAuth(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.redirect('/?error=unauthorized');
    }
  }
  
  module.exports = { requireAuth };
>>>>>>> 175b4b9177e37629d0233d824fa33d6106934471
