var express = require('express');
var socket = require('socket.io');

var app = express();
app.use(express.static('public'));
var port=5000 || process.env.PORT;

var server = app.listen(port, function () {
    console.log(`running on port ${port}`);
});
var io = socket(server);

io.on('connection',function(socket){
    console.log(' connected to ',socket.id);
    socket.on('mouseMove',function(msg){
        socket.broadcast.emit('mouseMove',msg);
    });

});
