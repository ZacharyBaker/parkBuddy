const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const parkingSpotSchema = new mongoose.Schema({
  spot: {
    type: [String],
    required: 'Please give your spot some data'
  }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('ParkingSpot', parkingSpotSchema);