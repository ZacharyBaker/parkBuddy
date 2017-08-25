const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ParkingSpot = mongoose.model('ParkingSpot');
const Secret = mongoose.model('Secret');

// async function createSpot (req, res) {
//   try {
//   // console.log(req.body, 'REQBODY')
//   const spot = await (new ParkingSpot(req.body)).save();
//   res.send('congrats you did it')
//   } catch(error) {
//     console.error(error)
//   }
// }
// async function createSecret (req, res) {
//   try {
//   const secret = await (new Secret(req.body)).save();
//   res.send('congrats you did it')
//   } catch(error) {
//     console.error(error)
//   }
// }

async function updateSpot(req, res) {
  try {
    const spot = await ParkingSpot.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    })
    res.send(spot)

  } catch(err) {
    console.error(err)
  }
}

async function getSpot(req, res) {
  try {
    const spot = await ParkingSpot.find();
    res.send(spot)
  } catch(err) {
    console.error
  }
}
async function getSecret(req, res) {
  try {
    const secret = await Secret.find();
    res.send(secret)
  } catch(err) {
    console.error
  }
}


router.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

router.get('/spot', getSpot)
router.get('/secret', getSecret)
/////////
///api///
/////////
// router.post('/', (req, res) => {
//   res.json(req.body)
// })
router.post('/api/update', updateSpot)


// router.post('/api/create', createSpot)
// router.post('/api/createSecret', createSecret)

module.exports = router;



