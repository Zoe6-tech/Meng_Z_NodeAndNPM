const express = require('express');// give http package

const server = express();
const path = require('path');

// set our views directory
server.set("views", path.join(__dirname, "views"));
//set the static assets director so Express knows where to lool
// for css files, JS files, image etc -anything static
server.use(express.static(path.join(__dirname, 'public')));//base on URL, look at public folder //creata a path to public directory
 
server.get("/", (req, res) => {
  console.log('you have now hit the home route');
  res.sendFile('views/index.html');
})

server.get("/contact", (req, res) => {
  console.log('hit the contact route');
  res.sendFile('contact.html');
})

const port = process.env.PORT || 3000;//localhost：3000

server.listen(port, () => {//spy on port 3000, listen it
  console.log(`Server is now running at ${port}/`);// like output, echo
});