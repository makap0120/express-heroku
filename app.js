const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hy');
});

app.listen(3000, () => {
    console.log('listening at port 3000');
});
