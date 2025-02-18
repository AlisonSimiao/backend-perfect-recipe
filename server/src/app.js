const express = require('express');
const cors = require('cors');
const { route } = require('./routes');
const db = require('./db/db');

db();
const server = express();
server.use(cors());
server.use(express.json());

server.use(route);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
