const express = require('express')
const { getUser, createUser } = require('../controller/userController')

const router = express.Router()

router.get('/user/:id', getUser)
router.post('/user', createUser)

module.exports = router