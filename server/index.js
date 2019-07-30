const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT ||  5000;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
  // Priority serve any static files.
app.use(express.static(path.join(__dirname, '../qsmon/build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});
  // All remaining requests return the React app, so it can handle routing.
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../qsmon/build', 'index.html'));
});
app.listen(port);