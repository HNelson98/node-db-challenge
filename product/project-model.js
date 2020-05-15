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

function getTasks() {

}

function addProject(){

}

function addTask() {

}

function addResource() {

}