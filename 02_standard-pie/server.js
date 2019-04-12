const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const popRouter = require('./route/popRouter.js')

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

server.get('/', (req, res) => {
res.status(200).send(`Today is ${utc}`);
});

server.use('/pop', popRouter);
module.exports = server;

