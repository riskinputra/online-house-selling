const House = require('../models/house')
const images = require('../helpers/images')

class HouseController {
  static findAll(req, res) {
    House.find()
    .then( result => {
      res.ststus(200).json({
        message: 'House List',
        data: result
      })
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static addHouse(req, res) {
    
    let dataHouse = new House({
      contactName: req.body.contactName,
      contactNumber: req.body.contactNumber,
      title: req.body.title,
      address: req.body.address,
      latitude: req.body.latitude || null,
      longtitude: req.body.longtitude || null,
      price: req.body.price,
      image: req.file.cloudStoragePublicUrl,
      kamarTidur: req.body.kamarTidur,
      kamarMandi: req.body.kamarMandi,
      bangunan: req.body.bangunan,
      tanah: req.body.tanah,
      lantai: req.body.lantai,
      watt: req.body.watt,
      thnBangun: req.body.thnBangun
    })
    dataHouse.save()
    .then(result => {
      res.status(200).json({
        message: 'Success To Input',
        data: result
      })
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

}

module.exports = HouseController