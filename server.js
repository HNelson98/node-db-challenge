const express = require('express');

const server = express();

const projectsRouter = require('./product/projects-router')

server.use(express.json());
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.json('Hello from the server!')
})

module.exports = server;