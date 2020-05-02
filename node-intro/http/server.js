const http = require('http');
const fs = require('fs');
const path = require('path');

http
  .createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url;
    const pathFile = path.join(__dirname, 'public', file);

    fs.readFile(pathFile, (err, content) => {
      if (err) throw err;
      res.end(content);
    });
    // if (req.url === '/') {
    //   fs.readFile(
    //     path.join(__dirname, 'public', 'index.html'),
    //     (err, content) => {
    //       if (err) throw err;
    //       res.end(content);
    //     }
    //   );
    // }
    // if (req.url === '/contato') {
    //   return res.end('<p>Hello world contato!</p>');
    // }
  })
  .listen(5000, () => console.log('server is running...'));
