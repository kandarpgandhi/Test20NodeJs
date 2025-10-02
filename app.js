const express = require('express')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const errorHandler = require('./middleware/errorHandler')

const app = express()

app.use(express.json())
app.use(productRoutes)
app.use(cartRoutes)

app.use(userRoutes)
app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})