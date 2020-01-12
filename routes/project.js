const express = require('express');
const router = express.Router();
const {
  projects
} = require('../data/data.json');

router.get('/:id', (req, res, next) => {
  let {
    id
  } = req.params;
  if (id >= projects.length) {
    next();
  }

  const projectName = projects[id].project_name;

  const {
    technologies,
    image_urls,
    description,
    github_link,
    live_link
  } = projects[id];

  const projectInfo = {
    projectName,
    technologies,
    image_urls,
    description,
    github_link,
    live_link
  };
  
  return res.render('project', {
    projectInfo
  });
});

module.exports = router;