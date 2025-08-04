import express from 'express'

const app = express()
const port = 8080

app.get('/', async (req, res) => {
    res.send({ "message": "Hello from Backend" })
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