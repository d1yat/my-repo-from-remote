const http = require('http');
const Student = require('./student');

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'GET') {
    switch(url) {
      case '/':
        response.setHeader('Content-Type', 'text/html');
        response.end('Welcome');
        break;
      default:
        response.setHeader('Content-Type', 'text/html');
        response.end('<h1>404 - Page not found.</h1>');
    }
  }
});

const port = 3000;
const host = 'localhost';
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
