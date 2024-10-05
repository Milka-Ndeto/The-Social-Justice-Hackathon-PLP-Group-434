function requireAuth(req, res, next) {
    if (req.user) {
      next();
    } else {
      res.redirect('/?error=unauthorized');
    }
  }
  
  module.exports = { requireAuth };