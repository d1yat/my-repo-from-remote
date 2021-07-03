const http = require('http');
const Student = require('./student');

const server = http.createServer((request, response) => {
  const { url } = request;

  if (url === '/') {
    response.setHeader('Content-Type', 'text/html');
    response.end('Welcome');
  }
});

const port = 5000;
const host = 'localhost';
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
