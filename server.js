const express = require('express');
const passport = require('passport');
const app = express();
const main = require('./routes/main')

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Setting up passport
require('./utils/passport')(passport, app)

// Call routes.
app.use('/', main)
  
app.listen(3001);


// Middlewares order !
//////////////////////

// cookieParser
// session
// passport.initialize
// passport.session
// app.router