const express = require('express');
const server = express();

const Projectsrouter = require('./projects/projects-router');


server.get('/', (req,res) =>{
    res.send('<h1> Get the Sprint Done</h1>')
})
server.use('/api/projects', Projectsrouter);

module.exports = server;