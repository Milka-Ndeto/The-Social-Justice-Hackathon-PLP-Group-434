const express = require('express');
const path = require('path');
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Clerk middleware
const clerkMiddleware = ClerkExpressRequireAuth({
  secretKey: process.env.CLERK_SECRET_KEY,
  publishableKey: process.env.VITE_CLERK_PUBLISHABLE_KEY
});

// Routes
app.get('/', (req, res) => {
  res.render('pages/home', { 
    user: req.auth ? req.auth.userId : null,
    clerkPubKey: process.env.VITE_CLERK_PUBLISHABLE_KEY
  });
});

app.get('/dashboard', clerkMiddleware, (req, res) => {
  res.render('protected/dashboard', { user: req.auth.userId });
});

// Add other routes as needed

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));