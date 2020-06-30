const Store = require('../models/Store')

// @desc  GET all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find()

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server Error' })
  }
}

// @desc  Create a store
// @route POST /api/v1/stores
// @access Public
exports.addStore = async (req, res, next) => {}
