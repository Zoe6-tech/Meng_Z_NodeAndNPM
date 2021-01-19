const http = require('http');// give http package
const stream = require('fs'); //const mean thing never change, var is older way, dont use it too much now

// require() is more or less the same as a JS import, just like PHP require

const hostname = '127.0.0.1';// this is localhost
const port = process.env.PORT || 3000;//localhost：3000

const server = http.createServer((req, res) => {//request to URL , and responce back
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  let url = req.url;// i.e localhost:3000/contact or localhost:3000/portfolio

  switch (url) {

    case "/"://will read index.html
      stream.readFile('index.html', null, ((err, data) => {
        if(err){//handel error first
          res.writeHead(404);
          res.write('404 not found');
        }else{
          res.write(data);//this is contact page
        }
      }
      ))
      break;

    case "/contact"://will read contact.html
      stream.readFile('contact.html', null, ((err, data) => {
        if(err){//handel error first
          res.writeHead(404);
          res.write('404 not found');
        }else{
          res.write(data);//this is contact page
        }
      }
      ))
      break;

      case "/portfolio"://will read portfolio.html
      stream.readFile('portfolio.html', null, ((err,data) => {
        if(err){//handel error first
          res.writeHead(404);
          res.write('404 not found');
        }else{
          res.write(data);//this is portfolio page
        }
      }
      ))
      break;

      default: 
      res.end('Nice to see you, week2');//serve up a custo error page
  }

});


server.listen(port, () => {//spy on port 3000, listen it
  console.log(`Server is now running at ${port}/`);// like output, echo
});