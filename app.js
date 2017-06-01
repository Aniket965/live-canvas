var express = require('express');
var socket = require('socket.io');

var app = express();
app.use(express.static('public'));
var server = app.listen(5000 || process.env.PORT, function () {
    console.log('running on port 5000');
});
var io = socket(server);

io.on('connection',function(socket){
    console.log(' connected to ',socket.id);
    socket.on('mouseMove',function(msg){
        socket.broadcast.emit('mouseMove',msg);
    });

});
