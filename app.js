const express = require('express');
const app = express();
const path = require('path');

//routes
const index = require('./routes/index');
const about = require('./routes/about');
const project = require('./routes/project');

//setting pug
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/about', about);

app.use('/projects', project);

app.use((req, res, next) => {
  console.error('Uh Oh, the page cannot be found');
  const err = new Error('The page cannot be found');
  err.status = 404;
  next(err);
});

app.use((req, res, next) => {
  const err = new Error('Sorry, an error occurred');
  console.error("An Error Occurred");
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));