// create web server
// run node comments.js
// go to http://localhost:3000/comments.html

var http = require('http');
var fs = require('fs');
var url = require('url');

var COMMENTS_FILE = 'comments.json';

// create server
http.createServer(function(req, res) {
    // get url
    var url_parts = url.parse(req.url);
    console.log(url_parts);

    // get file name
    var path = url_parts.pathname;
    console.log(path);

    // get file extention
    var ext = path.split('.').pop();
    console.log(ext);

    // get query string
    var query = url_parts.query;
    console.log(query);

    // get file name
    var filename = path.substring(1);
    console.log(filename);

    // default page
    if (path == '/') {
        filename = 'index.html';
    }

    // get file type
    var type = 'text/html';
    switch (ext) {
        case 'css':
            type = 'text/css';
            break;
        case 'js':
            type = 'text/javascript';
            break;
        default:
            type = 'text/html';
            break;
    }

    // read file
    fs.readFile(filename, function(err, data) {
        if (err) {
            // error
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found\n');
        } else {
            // success
            res.writeHead(200, { 'Content-Type': type });
            res.write(data);
        }
        res.end();
    });
}).listen(3000);

console.log('Server running at http://localhost:3000/');