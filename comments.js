// create web server
// start web server
// handle web requests
// respond to web requests
// stop web server
// test web server
// test web server with curl
// test web server with browser
// test web server with postman

// import express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// create web server
const app = express();

// enable CORS
app.use(cors());

// handle web requests
app.use(bodyParser.json());

// respond to web requests
app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send('Your comment is successfully added.');
});

// start web server
app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});

// stop web server: ctrl + c

// test web server with curl
// curl http://localhost:3000/comments
// curl http://localhost:3000/comments -X POST -H "Content-Type: application/json" -d '{"text":"This is a test comment."}'

// test web server with browser
// http://localhost:3000/comments

// test web server with postman
// http://localhost:3000/comments
// http://localhost:3000/comments -X POST -H "Content-Type: application/json" -d '{"text":"This is a test comment."}'