const http = require('http');// give http package

// require() is more or less the same as a JS import, just like PHP require

const hostname = '127.0.0.1';// this is localhost
const port = process.env.PORT || 3000;//localhost：3000

const server = http.createServer((req, res) => {//request to URL , and responce back
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Nice to see you, week2');
});

server.listen(port, () => {//spy on port 3000, listen it
  console.log(`Server is now running at ${port}/`);// like output, echo
});