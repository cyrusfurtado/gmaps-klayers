const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const morgan = require('morgan');
const port = 3000;

const logger = morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  });

app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

server.listen(port, () => console.log('server listening on port: ' + port));
