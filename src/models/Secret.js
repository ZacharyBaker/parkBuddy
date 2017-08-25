const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const secretSchema = new mongoose.Schema({
  secret: {
    type: Object,
    required: 'Please give your secret some data'
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Secret', secretSchema);