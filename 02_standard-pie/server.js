const express = require('express');
const server = express();
// const db = require('./database/pieBase.db3')
// Routes


server.use(express.json());

//server.use('route', dishesR)
//server.use('route', recipesRo)

module.exports = server;

