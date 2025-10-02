const { sendResponse } = require('../utils/response')

exports.getProduct = (req, res, next) => {
    try {
        const productId = req.params.id

        if (parseInt(productId) < 10) {
            const error = new Error('Product not found')
            error.statusCode = 404
            throw error
        }

        const product = { id: productId, name: "Laptop", price: 500 }
        return sendResponse(res, product, 200)
    } catch (err) {
        next(err)
    }
}

exports.createProduct = (req, res, next) => {
    try {
        const { name, price } = req.body

        if (!name || !price) {
            const error = new Error('Name and Price are required')
            error.statusCode = 400
            throw error
        }

        const product = { id: 1, name, price }
        return sendResponse(res, product, 201)
    } catch (err) {
        next(err)
    }
}
