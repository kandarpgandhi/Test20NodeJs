const { sendResponse } = require('../utils/response')

exports.getCart = (req, res, next) => {
    try {
        const cartId = req.params.id

        if (parseInt(cartId) < 5) {
            const error = new Error('Cart not found')
            error.statusCode = 404
            throw error
        }

        const cart = { id: cartId, products: [{ id: 1, name: "Laptop", qty: 1 }] }
        return sendResponse(res, cart, 200)
    } catch (err) {
        next(err)
    }
}

exports.addToCart = (req, res, next) => {
    try {
        const { productId, qty } = req.body

        if (!productId || !qty) {
            const error = new Error('ProductId and Qty are required')
            error.statusCode = 400
            throw error
        }

        const cart = { id: 1, products: [{ id: productId, qty }] }
        return sendResponse(res, cart, 201)
    } catch (err) {
        next(err)
    }
}
