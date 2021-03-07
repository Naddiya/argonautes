require('dotenv').config()

const http = require('http');
const app = require('./app');

const server = http.createServer((req, res) => {
    res.end('Server Ok');
});

server.listen(process.env.PORT || 3001);