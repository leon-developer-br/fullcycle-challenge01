const express = require("express");

const { PORT, HOST } = process.env;

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Maratona Full Cycle 2.0"
    });
})

app.listen(PORT, HOST);
console.log(`Application running on http://${HOST}:${PORT}`);