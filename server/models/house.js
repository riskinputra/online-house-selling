const mongoose        = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Schema          = mongoose.Schema;

const housesSchema = new Schema({
  contactName: {
    type      : String,
    required  : [true, 'Contact Name is required']
  },
  contactNumber: {
    type      : String,
    required  : [true, 'Contact Number is required']
  },
  title: {
    type      : String,
    required  : [true, 'Title is required']
  },
  address: {
    type      : String,
    required  : [true, 'Address is required']
  },
  latitude    : {
    type      : Number,
  },
  longtitude  : {
    type      : Number
  },
  price       : {
    type      : Number,
    required  : [true, 'Price is required']
  },
  image       : String,
  kamarTidur  : Number,
  kamarMandi  : Number,
  bangunan    : Number,
  tanah       : Number,
  lantai      : Number,
  watt        : Number,
  thnBangun   : Number,
  status      : {
    type      : Boolean,
    default   : false
  },
  createdAt : {
    type      : Date,
    default   : new Date()
  }
})

housesSchema.plugin(uniqueValidator, {type: 'mongoose-unique-validator'})
const House = mongoose.model("House", housesSchema);
module.exports = House