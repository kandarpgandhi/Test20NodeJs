const express = require('express')
const { getProduct, createProduct } = require('../controller/productController')

const router = express.Router()

router.get('/product/:id', getProduct)
router.post('/product', createProduct)

module.exports = router
