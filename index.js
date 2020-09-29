const express = require('express');
const socket = require('socket.io')
const app = express();
var server = app.listen(3000,()=>{
    console.log('server listning on the port on 3000');
    
});

app.use(express.static('public'));

var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});