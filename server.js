const http = require('http')

const server = http.createServer((req,res) => {
    let url = req.url
    console.log(url)
    if(url === '/goodbye'){
        res.writeHead(200);
    res.end('Goodbye');
    }else if(url === '/error'){
        res.writeHead(500);
        let errorMessage = {
            "error" : "server error"
        }

        res.end(JSON.stringify(errorMessage))


    }else{
        res.writeHead(200);
        res.end('Hello world');
    }

    

})

server.listen(3000)
console.log('server address: http://localhost:3000')