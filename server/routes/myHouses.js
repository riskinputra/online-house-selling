const express = require('express');
const router = express.Router();
const MyHouse = require('../controllers/myHouses')
const images = require('../helpers/images')

module.exports = router 
  .get('/', MyHouse.findMyHouse)
  .put('/:id', images.multer.single('image'), images.sendUploadToGCS,MyHouse.update)
  .delete('/:id', MyHouse.delete)