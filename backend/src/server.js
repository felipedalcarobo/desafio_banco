const express = require('express');

const app = express();

app.get('/', (req, res ) => {
    return res.json({ message: "Hello World!sss" });
});
app.listen(3333);