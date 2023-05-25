// create a webserver that can listen to requests for comments
// and return all comments to the client
// comments are stored in comments.json
// comments are stored as an array of objects
// each comment has a name and a comment

// create a web server
// use the fs module to read all of the comments from comments.json
// send back the contents of comments.json to the client

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // read the contents of comments.json
  // send back the contents of comments.json
  fs.readFile('comments.json', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});


