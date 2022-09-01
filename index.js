const express = require('express');
const app = express();
const http = require('http');
const { Socket } = require('socket.io');
const expressServer = http.createServer(app);


const {Server} = require('Socket.io')

let io = new Server(expressServer);







app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})



io.on('connection', function (socket) {
    socket.on('chat', function (msg) {
       io.emit('chat_transfer', msg)
   })
})



expressServer.listen(4000, function () {
    console.log("Server is Running")
})