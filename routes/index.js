const express = require('express');
const router = express.Router();

const {
  projects
} = require('../data/data.json');

router.get('/', function (req, res, next) {
  res.render('index', {
    projects
  });
});

module.exports = router;