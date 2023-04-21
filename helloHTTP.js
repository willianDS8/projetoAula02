//Importar biblioteca para usar  http e url
const http = require('http');
const url = require('url');
const fs = require('fs');

function readFile(response , readFile){
    fs.readFile(readFile, function( err ,data ) {
        response.end(data);

    });
}


//criar função para trabalhar no servidor-------------------------------------------------------------
var callBack = function(request, response){
    response.writeHead(200,{"Content-type" : "text/plain"});
    
    var parts = url.parse(request.url);
    var path  = parts.path;

    if (parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "SiteBatata.html");
    } else if (parts.path == "/rota1"){
        response.writeHead(200, {"Content-type": "application/pdf"});
        readFile(response, "arquivo1.pdf");
    } else if (parts.path == "/rota2"){
        response.writeHead(200, {"Content-type": "application/json"});
        readFile(response, "arquivo2.json");
    } else if (parts.path == "/rota3"){
        response.writeHead(200, {"Content-type": "image/png"});
        readFile(response, "arquivo3.png");
    } else if (parts.path == "/rota4"){
        response.writeHead(200, {"Content-type": "application/zip"});
        readFile(response, "arquivo4.zip");
    } else if (parts.path == "/rota5"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "Geradores.html");
    } else if (parts.path == "/rota6"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "SiteUnicsul.html");
    } else {
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "Site404.html");
    }

}  
//verifica rota






//cria servidor http que atende todas as requisições---------------------------------------------------
var server = http.createServer(callBack);

//criar servidor----------------------------------------------------------------------------------------
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000");
