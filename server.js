const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/with-redux.html`);
});

app.listen(PORT, () => {
    console.log("Listen on 3003 port ...")
});
