var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);






/*const { Socket } = require('dgram');
const net = require('net');

const server = net.createServer()

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('\nMensaje recibido desde el cliente:' + data)
        socket.write('Recibido!')
    })

    socket.on('close', ()=>{
        console.log('Comunicacion finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

server.listen(8000, ()=> {
    console.log('El servidor esta escuchando', server.address().port)
})*/