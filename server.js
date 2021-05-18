'use strict';

const http = require('http');

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
})
.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});