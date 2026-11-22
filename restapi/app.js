const http = require('http')
const fs = require('fs')
const path = require('path');
 server = http.createServer((req,res) => {
 let filepath ;
 if (req.url === '/' ){
  filepath = 'index.html';

  res.status(400)


 }
 else if( req.url === '/about'){
  filepath = 'about.html'
 }
 else if (req.url === '/contactme') {
        filePath = 'contact.html';
    } 
    else {
        filePath = '404.html';
        res.statusCode = 404;
    }

    const fullPath = path.join(__dirname, filePath);
 fs.readFile(fullPath,(err,data) =>{
     if (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.end(data);
 })
  res.end('this is home page ');

})

const port = 8080;
server.listen(port, () =>{


  console.log("sserver running 8080");
  
})
