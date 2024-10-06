const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home', {
    user: req.user,
    clerkPubKey: process.env.VITE_CLERK_PUBLISHABLE_KEY
  });
});

router.get('/blog', (req, res) => {
  res.render('pages/blog', { user: req.user });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact', { user: req.user });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { user: req.user });
});

router.get('/how-it-works', (req, res) => {
  res.render('pages/how-it-works', { user: req.user });
});

module.exports = router;
