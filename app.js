const express = require('express')

const app = express()
const port = 3000

app.use(express.json());

let dummy = "500"

app.get('/', (req, res) =>
    res.send('Hello, World!')
)

app.post('/update/dummy', (req, res) => {
    const { newValue } = req.body
    dummy = newValue
    console.log(dummy)
    res.send('Updated!')
})

app.listen(port, () => console.log("Server start hoise"))