const http = require('http');
const Student = require('./student');

const server = http.createServer((request, response) => {
  const { url } = request;

  const students = [
    new Student(101, 'Ahmad Fasehan'),
    new Student(102, 'Andris Firmansyah'),
    new Student(103, 'Akhirudin Sudiyat'),
    new Student(104, 'Bani Arham'),
    new Student(105, 'Rido Raudho'),
  ];

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
