const db = require('../data/db-config')

module.exports = {
    getResources,
    getProjects,
    getTasks,
    addResource,
    addProject,
    addTask
}

function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources');
}

function getTasks(id) {
    return db.from('tasks').where('projects.id', id) 
    .join('projects', 'tasks.project_id', '=', 'projects.id')
    
    .select('projects.projectName', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed')  
    
}

function addProject(newProject){
    return db('Projects')
    .insert(newProject)
}

function addTask(newTask) {
    return db('Tasks')
    .insert(newTask)
}

function addResource(newResourcse) {
    return db('resources')
    .insert(newResourcse)
}