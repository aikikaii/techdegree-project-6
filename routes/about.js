const express = require('express');
const router = express.Router();
const {
  projects
} = require('../data/data.json');

router.get('/', (req, res, next) => {
  res.render('about', {
    projects
  });
});

module.exports = router;