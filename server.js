const path = require('path');
const express = require('express');
const app = express();


var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.listen(port);
