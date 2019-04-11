require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const server = require('./server')
const db = require('./database/config00.js');

/********************* port ************************* */
var randomMessage = ['home Indie', 'home Ruby','Mr. Anderson','home Employee #ER28-0652','friend', 'Slayer','to the Server','to the happiest server this side of the sea, love','HOST #420','back.','SERVER ONLINE','to the net',', you are live','all linked up and ready to roll','creator','to the development server!','master.','I am happy to server you!'];
var message = randomMessage[Math.floor(Math.random()*randomMessage.length)];

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`** Welcome ${message}. **\n** UP and running on http://localhost:${PORT} **\n`)
);