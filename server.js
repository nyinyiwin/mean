const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
var app = express();

const api = require("./server/routes/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'dist')));
app.use('/api',api);

app.get('*',function(req,res) {
 res.send(path.join(__dirname,'dist/index.html'));
});

const port = process.env.port || '3000';
app.set('port',port);
const server = http.createServer(app);
server.listen(port,() => console.log(`Running on localhost: ${port}`));