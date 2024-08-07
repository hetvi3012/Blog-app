const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blogApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Express session middleware
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

// Connect flash
app.use(flash());

// Import routes
const indexRoutes = require('./routes/index');
const createRoutes = require('./routes/create');
const editRoutes = require('./routes/edit');
const commentRoutes = require('./routes/comments'); // Import comment routes

// Use routes
app.use('/', indexRoutes);
app.use('/', createRoutes);
app.use('/', editRoutes);
app.use('/', commentRoutes); // Use comment routes

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
