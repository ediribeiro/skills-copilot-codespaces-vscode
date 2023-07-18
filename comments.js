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

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Store comments in an array
let comments = [];

app.get('/comments', (req, res) => {
    res.json(comments); // Return comments as JSON
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send('Your comment is successfully added.');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
