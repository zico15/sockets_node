const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
  console.log('usuario conectou: '+socket.id);
  socket.on('msg',(msg)=>{
	  socket.broadcast.emit('msg',msg);
	  socket.join('teste');
	})
	
});

let counter = 0;
setInterval(() => {
	//io.to('teste').emit('msg',counter);
	counter++;
	
},1000)
http.listen(3000, function(){
  console.log('listening on *:3000');
});
