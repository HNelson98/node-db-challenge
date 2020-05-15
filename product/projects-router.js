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

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.getTasks(id)
        .then(tasks => {
            if (tasks.length) {
                res.json(tasks);
            } else {
                res.status(404).json({ message: 'Could not find tasks for given project' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});


router.post('/', (req, res) => {
    const newProject = req.body;

    Projects.addProject(newProject)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
});

router.post('/resources', (req, res) => {
    const newResource = req.body;

    Projects.addResource(newResource)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});
module.exports = router;