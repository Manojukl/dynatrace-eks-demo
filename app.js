// app.js
const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

// Create /app/data directory if it doesn't exist
const dataDir = '/app/data';
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Dynatrace EKS Demo! Build: ' + process.env.BUILD_VERSION + '\n');
});

server.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});