const House = require('../models/house')
const images = require('../helpers/images')

class MyHouse {
  static findMyHouse(req, res) {
    House.find({userId: req.query.userId})
    .populate('userId')
    .exec()
    .then(results => {
      res.status(200).json({
        message   : 'My House',
        data      : results
      })
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static update(req, res) {
    House.findById(req.params.id)
    .then(result => {
      result.contactName = req.body.contactName || result.contactName 
      result.contactNumber = req.body.contactNumber || result.contactNumber
      result.title = req.body.title || result.title
      result.description = req.body.description || result.description
      result.price = req.body.price || result.price
      // result.image = req.file.cloudStoragePublicUrl || result.image
      result.kamarTidur = req.body.kamarTidur || result.kamarTidur
      result.kamarMandi = req.body.kamarMandi || result.kamarMandi
      result.bangunan = req.body.bangunan || result.bangunan
      result.tanah = req.body.tanah || result.tanah 
      result.lantai = req.body.lantai || result.lantai
      result.watt = req.body.watt || result.watt
      result.thnBangun = req.body.thnBangun || result.thnBangun

      result.save()
      .then(dataHouse => {
        res.status(200).json({
          message    : 'Success to update',
          data       : dataHouse
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
}

module.exports = MyHouse