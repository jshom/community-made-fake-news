const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const io = require('socket.io')(80)

app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}))
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('works')
})

let nominees = []

io.on('connect', socket => {
  socket.on('poll-keyword', (id, msg) => {

  })
  socket.on('poll-sentence', (id, msg) => {

  })
  socket.on('disconnect', (id, msg) => { // handle reassign })
})

io.on('')


app.listen(3000)
