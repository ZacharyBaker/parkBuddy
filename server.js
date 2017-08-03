const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

// todo :: mongo DB

app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, err => {
  err ? console.error(err) : console.info(`=> listening on port ${PORT}.`)
})