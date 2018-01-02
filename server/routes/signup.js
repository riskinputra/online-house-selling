const express = require('express');
const router = express.Router();
const SignUp = require('../controllers/signup')

module.exports = router 
  .post('/', SignUp.createUser)