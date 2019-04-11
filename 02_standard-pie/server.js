const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');
const popRouter = require('./routes/pop-route');

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello from Express');
});

server.use('/pop', popRouter);

module.exports = server;

