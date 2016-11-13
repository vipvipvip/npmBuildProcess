// index file for features folder

var express = require('express')
  , router = express.Router()

// route for all features
// there is only one module that support the calc feature
// so route it directly to that module
router.use('/calc', require('../modules/calc/calc'));

module.exports = router;