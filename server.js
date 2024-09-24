const http = require('node:http'); // or require('http');

const serverInstance = http.createServer(function (req, res) {
    if (req.url === '/getMoreData') {
        res.end('heres your data');
    } else {
        res.end('Hello world');
    }
});

serverInstance.listen(2777);


