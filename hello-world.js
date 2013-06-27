// Carrega a biblioteca HTTP do Node.js.
var http = require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('<html><body><h1>Hello World</h1></body></html>');
	response.end();
});

//define a porta
server.listen(3000, function(){
  console.log('Executando Servidor HTTP');
});