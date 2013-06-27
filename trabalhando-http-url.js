var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
	var result = url.parse(request.url, true);

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><body>");
	response.write("<h1>Dados da query string</h1>");
	for(var key in result.query){
		response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
	}
	response.write("</body></html>");
	response.end();
});

server.listen(3000, function(){
	console.log('Executando Servidor HTTP');
});

//http://localhost:3000/?nome=jean&idade=24&email=jeanmatheussouto@gmail.com