var path = require('path');
var webpack = require('webpack');
var express = require('express');

const port = process.env.PORT || 8000;

var app = express();

if (process.env.NODE_ENV !== 'production') {
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://localhost:${port}`);
})