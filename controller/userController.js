const { sendResponse } = require('../utils/response')

exports.getUser = (req, res, next) => {
    try {
        const userId = req.params.id

        if (parseInt(userId) < 10) {
            const error = new Error('User not found')
            error.statusCode = 404
            throw error
        }

        const user = { id: userId, name: "John Doe", email: "john@example.com" }
        return sendResponse(res, user, 200)
    } catch (err) {
        next(err)
    }
}

exports.createUser = (req, res, next) => {
    try {
        const { name, email } = req.body

        if (!name || !email) {
            const error = new Error('Name and Email are required')
            error.statusCode = 400
            throw error
        }

        const user = { id: 1, name, email }
        return sendResponse(res, user, 201)
    } catch (err) {
        next(err)
    }
}
