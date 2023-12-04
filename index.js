const express = require('express');
const app = express();



const clientRequest = (req, res) => {
    const userInfo = req.query.user;
    console.log(userInfo);
}

app.get('/', clientRequest);


const Port = 3000;
app.listen(Port, () => {
    console.log('listening on port 3000');
});