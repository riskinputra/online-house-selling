const express = require('express');
const router = express.Router();
const HouseController = require('../controllers/houses')
const images = require('../helpers/images')

module.exports = router 
  .get('/', HouseController.findAll)
  .post('/', images.multer.single('image'), images.sendUploadToGCS, HouseController.addHouse)
  .get('/:id', HouseController.findById)