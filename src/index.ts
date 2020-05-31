import express from 'express'
import indexRoute from './routes/index'

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(indexRoute)

app.listen(3000, () => {
    console.log('Server is running')
})