const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Import routes
const indexRoutes = require('./routes/index');
const createRoutes = require('./routes/create');
const editRoutes = require('./routes/edit');

// Use routes
app.use('/', indexRoutes);
app.use('/', createRoutes);
app.use('/', editRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
