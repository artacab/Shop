require('dotenv').config()
const models = require('./models/models')
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
api.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)




const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}
start()
