// Import the built-in HTTP module
const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) =>{

  // Send a response to the client
  res.end('Hello from Emad!');
});

// Start the server and listen on the specified port and IP
server.listen(3000,() => {
  console.log(`Server is running on port 3000`);
});
