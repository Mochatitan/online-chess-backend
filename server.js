const express = require('express');
const app = express();
const PORT = 5000;
const CORS = require('cors');

app.use(CORS);

app.get('/', (req, res) => {
    console.log(colors)
    res.send('Welcome to NodeJS + Express CORS Server! ')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})