const http=require('http');

const server=http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'});

    res.write("<h1>Oi Mundo</h1>");
    res.end();
});

server.listen(8080,()=>{
    console.log('Servidor Ok')
})