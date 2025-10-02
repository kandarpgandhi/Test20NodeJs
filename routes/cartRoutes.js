const express = require('express')
const { getCart, addToCart } = require('../controller/cartController')

const router = express.Router()

router.get('/cart/:id', getCart)
router.post('/cart', addToCart)

module.exports = router
