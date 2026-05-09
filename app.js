// app.js — Main application file
// This creates a simple HTTP web server
 
const http = require('http');
// http is a built-in Node.js module — no install needed
 
const PORT = process.env.PORT || 3000;
// process.env.PORT reads the PORT environment variable
// If not set, defaults to 3000
 
const server = http.createServer((req, res) => {
  // This function runs every time someone visits your app
 
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // 200 = HTTP OK, telling the browser the request succeeded
 
  res.end('Hello from Dynatrace EKS Demo! Build: ' + process.env.BUILD_VERSION + '\n');
  // Sends the response text back to the browser
  // BUILD_VERSION will be injected by Kubernetes
});
 
server.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
  // This message appears in the container logs
});
