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
    return db('tasks')
    .join('projects', 'projects.id', '=', 'tasks.project_id')
    .select('project.projectName', 'project.description', 'task.description', 'task.notes', 'task.completed')
    .where('projects.id', id)


    // return db('tasks').where('projects_id', id)
    // .join('projects', 'tasks.projects_id', 'projects.id')
    // .select('project.projectName', 'project.description', 'task.description', 'task.notes', 'task.completed')
    
}

function addProject(newProject){
    return db('Projects')
    .insert(newProject)
}

function addTask() {

}

function addResource(newResourcse) {
    return db('resources')
    .insert(newResourcse)
}