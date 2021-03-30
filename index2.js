const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});

    if(req.url==='/'){
        res.write('<h3>Home Page </h3>');
    }else if(req.url==='/sobre'){
        res.write('<h3>Sobre Nós </h3>');
    }else{
        res.writeHead(400,{'Content-type':'text/html;charset=utf-8'});
        res.write('<h1>Página não Encontrada</h1>')
    }

    res.end();


})
server.listen(8080,()=>{
    console.log('Listemmmmmm....')
})