const Store = require('../models/Store')

// @desc  GET all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = (req, res, next) => {
  res.send('Hello')
}
