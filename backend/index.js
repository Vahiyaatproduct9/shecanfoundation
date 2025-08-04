import express from 'express'
import data from './sampleData.js'
import cors from 'cors'

const app = express()
const port = 8080

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.send({ "message": "Hello from Backend" })
})

app.get('/leaderboard/data', (req, res) => {
    res.send(data)
})

app.get('/data', (req, res) => {
    const data = {
        "code": "shecan2025",
        "amount": (100 + Math.round(Math.random() * 50)) * 100
    }
    res.send(data)
})

app.listen(port, () => {
    console.log(`<<< backend online >>> \n port: ${port}`)
})