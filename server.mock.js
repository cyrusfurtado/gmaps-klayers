const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const morgan = require('morgan');
const port = 3000;

const package = require('./package.json');

const logger = morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  });


const toUpperCase = (text) => {
  const parts = text.split('-');

  const u_parts = parts.map(part => {
    return part.charAt(0).toUpperCase() + part.charAt(1).toUpperCase() + part.substr(2);
  })

  const camel_string = u_parts.join('');
  console.log('camel_string: ' + camel_string);

  return camel_string;
}

app.use(logger);

app.use(express.static(path.join(__dirname, 'dist', toUpperCase(package.name))));

app.get('/*',  (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', toUpperCase(package.name), 'index.html'));
});

const server = http.createServer(app);

server.listen(port, () => console.log('server listening on port: ' + port));
