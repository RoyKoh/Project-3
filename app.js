var PORT
PORT = process.env.PORT || 5000
const express = require('express')
const app = express()
var http = require('http').Server(app)
 // app.get('/', function(req, res){
 // res.sendFile(dirname + '/index.html');
 // });
var root = __dirname + '/app'
app.use(express.static(root))
 //   io.on('connection', function (socket) {
 //     socket.on('chat message', function (msg) {
 //     console.log('index => ', msg)
 //     io.emit('chat message', msg)
 //     })
 //   })
  //
  // app.use("/bower_components", express.static(__dirname + "/bower_components"))
http.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})
