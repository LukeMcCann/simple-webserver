'use strict';

require('dotenv').config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

