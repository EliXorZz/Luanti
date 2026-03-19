const http = require('http');
const port = 3000;

const requestListener = (req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello from Node.js!');
};

const server = http.createServer(requestListener);
server.listen(port, () => {
 console.log(`Server running on port ${port}`);
});

