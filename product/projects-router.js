const express = require('express');

const Projects = require('./project-model');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
    });
})

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
    });
})

module.exports = router;