const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const parkingSpotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please give your spot a name'
  },
  position: {
    type: Number,
    required: 'Please give your spot a position'
  },
  currentResident: {
    type: String,
    required: 'Who is parked here??'
  }
})

module.exports = mongoose.model('ParkingSpot', parkingSpotSchema);