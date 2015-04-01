var express = require('express'),
    app = express();

var cookieParser = require('cookie-parser');

app.use(cookieParser());

var httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxyServer();

app.get('/user', function(req, res) {
  res.send('*VADER VOICE* I have you now!');
});

app.get('*', function(req, res) {
  console.log(req.cookies);
  proxy.web(req, res, { target: 'http://localhost:3000' }); 
});

app.listen(3001);
