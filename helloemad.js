// Import the built-in HTTP module
const http = require('http');

// Define the port to listen on
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response to the client
  res.end('Hello from Emad!');
});

// Start the server and listen on the specified port and IP
server.listen(port 3000, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
