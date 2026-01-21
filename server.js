const http = require('http');

const server = http.createServer((req, res) => {
        console.log('request event');
        res.end('hello lady');
});

server.listen(5000, ()=>{
    console.log('server listening to port 5000');
});