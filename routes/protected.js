const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');

router.get('/dashboard', requireAuth, (req, res) => {
  res.render('protected/dashboard', { user: req.user });
});

router.get('/opportunities', requireAuth, (req, res) => {
  res.render('protected/opportunities', { user: req.user });
});

router.get('/profile', requireAuth, (req, res) => {
  res.render('protected/profile', { user: req.user });
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 175b4b9177e37629d0233d824fa33d6106934471
