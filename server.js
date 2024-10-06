const express = require('express');
const path = require('path');
<<<<<<< HEAD
=======
const mysql = require('mysql2');
>>>>>>> 175b4b9177e37629d0233d824fa33d6106934471
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');
require('dotenv').config();

const app = express();
<<<<<<< HEAD

=======
// database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
  });
  db.connect((err) =>{
    if (err) {
      console.error('error connecting:', err);
      return;
      }
      console.log('connected to database as id ' + db.threadId);

  })
>>>>>>> 175b4b9177e37629d0233d824fa33d6106934471
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

<<<<<<< HEAD
// Use protected routes directly without the '/protected' prefix
app.use(require('./routes/protected'));
app.use('/', require('./routes/public'));
=======
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
>>>>>>> 175b4b9177e37629d0233d824fa33d6106934471

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> 175b4b9177e37629d0233d824fa33d6106934471
