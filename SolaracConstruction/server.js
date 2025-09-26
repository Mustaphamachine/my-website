const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Parse URL and remove query string
    let filePath = req.url.split('?')[0];
    
    // Default to index.html for root path
    if (filePath === '/') {
        filePath = '/index.html';
    }
    
    // Construct full file path
    const fullPath = path.join(__dirname, filePath);
    
    // Get file extension
    const extname = path.extname(fullPath).toLowerCase();
    
    // Set content type based on file extension
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
    };
    
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    // Set cache control headers to prevent caching during development
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    // Check if file exists
    fs.access(fullPath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Page Not Found</h1><p>The requested page could not be found.</p>');
            return;
        }
        
        // File exists, read and serve it
        fs.readFile(fullPath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Internal Server Error</h1>');
                return;
            }
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        });
    });
});

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
    console.log(`SOLARAC Construction website server running at http://${HOST}:${PORT}`);
    console.log('Available pages:');
    console.log('- Home: http://localhost:5000/');
    console.log('- About: http://localhost:5000/about.html');
    console.log('- Services: http://localhost:5000/services.html');
    console.log('- Projects: http://localhost:5000/projects.html');
    console.log('- Certificates: http://localhost:5000/certificates.html');
    console.log('- Team: http://localhost:5000/team.html');
    console.log('- Contact: http://localhost:5000/contact.html');
});