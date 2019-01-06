const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/version', (req, res) => res.send('1.0.0'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))