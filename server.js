const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// sensitive info
require('dotenv').config({ path: 'variables.env' });
const PORT = process.env.PORT || 8080;
// connect to db and handle bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`🙀👎🙀👎🙀👎🙀👎 > ${err.message}`)
})
mongoose.connection.once('open', () => {
  console.log('🤘 ⭐ 🤘 ⭐ 🤘 ⭐ 🤘 ⭐  🤘 ⭐ hooza')
})
// IMPORT MODELS
require('./src/models/ParkingSpot')

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});


app.listen(PORT, err => {
  err ? console.error(err) : console.info(`=> listening on port ${PORT}.`)
})