const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

//Asynchronous nature of Node.js: The server.listen() method is asynchronous.  The code that follows server.listen() will execute before the server is actually listening on the specified port, leading to unpredictable behavior, such as the server not being able to handle requests.

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Additional code after server.listen that might execute before the server is ready
console.log('Server started');