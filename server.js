'use strict'

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
   console.log(request.method, request.url);
   if (request.url === '/style.css') {
      const style = fs.readFileSync('style.css', 'utf-8');
      response.end(style);
   } else {
      const html = fs.readFileSync('index.html', 'utf-8');
      response.end(html);
   }
});

server.listen(process.env.PORT || 3000);
console.log('Server started');