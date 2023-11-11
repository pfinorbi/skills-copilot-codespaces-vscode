// Create web server
// 1. Load the http module
// 2. Create a web server
// 3. Set the port
// 4. Start the server
// 5. Display a message

// 1. Load the http module
var http = require('http');
var url = require('url');
var fs = require('fs');

// 2. Create a web server
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    // 3. Set the port
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }

        // 4. Start the server
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

// 5. Display a message
console.log('Server running at http://localhost:8080/');