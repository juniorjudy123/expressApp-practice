const express = require('express');
const app = express();


//http://localhost:3000/?user=benoy    typed  inthe browser
const clientRequest = (req, res) => {
    const userInfo = req.query.user;
    console.log(userInfo);
}

app.get('/', clientRequest);


const Port = 3000;
app.listen(Port, () => {
    console.log('listening on port 3000');
});