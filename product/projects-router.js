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
    const  id  = req.params.id;

    Projects.getTasks(id)
        .then(tasks => {

            res.status(200).json(tasks);

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

router.post('/tasks', (req, res) => {
    const newTask = req.body;
    
     Projects.addTask(newTask)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new task' });
        });
});
module.exports = router;