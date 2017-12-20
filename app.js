const express = require('express'),
      http = require('http'),
      logger = require('morgan'),
      path = require('path');

const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'static')));
// Handle 404 for inexistent files
app.use((req, res) => {
  res.status(404).send('404: Page not Found');
});

app.get('/hello', (req, res) => res.send('Just Saying Hello in this route'));

const port = 3301;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log('app running on port ' + port)
});
