// create web server
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// create web server
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// create a get request
app.get('/posts/:id/comments', (req, res) => {
  res.send([
    {
      id: 1,
      comment: 'comment 1'
    },
    {
      id: 2,
      comment: 'comment 2'
    }
  ])
})

// create a post request
app.post('/posts/:id/comments', (req, res) => {
  res.send('post request')
})

// listen to the port
app.listen(4001, () => {
  console.log('listening on port 4001')
})

