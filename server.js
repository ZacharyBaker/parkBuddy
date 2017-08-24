const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// sensitive info
require('dotenv').config({ path: 'variables.env' });
const PORT = process.env.PORT || 8080;
// connect to db and handle bad connections
console.log(process.env.ZACH, "procFAEF ENVIRONMENT")
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

const routes = require('./routes/index')
const app = express();
app.use(bodyParser.json());
app.locals = {
  ZACH: process.env.ZACH,
  JADEN: process.env.JADEN,
  VLAD: process.env.VLAD,
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', routes);

app.listen(PORT, err => {
  err ? console.error(err) : console.info(`=> listening on port ${PORT}.`)
})