const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('listening on port 3000');
});

const clientRequest = (req, res) => {
    console.log('client says hello');
}

app.get('/', clientRequest);