// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var jsonData = {count: 12, message: 'hey'};

const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  
  fs.readFile('index.html', (err, buffer) => {
    const html = buffer.toString();
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  })
  // res.sendFile(__dirname + '/index.html', (error) => {
  //   if(error) {
  //     res.status(500).send(error);
  //   }
  // })
});

app.get('/data', (req, res) => {
  return res.json(jsonData);
});

app.listen(3000, function() {
  console.log("server running on port:3000");
});