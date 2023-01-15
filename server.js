const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);
app.use(express.json());
var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended: true})) 
const PORT = 8080;


http.listen(PORT, function(){
    console.log('listening on 8080');
});

app.post('/turnchoice', (req, res)=>{
    console.log(req.body)
    res.redirect('/')
})


io.on('connection', (socket)=>{
    console.log('ㅇㄹㅇㄹㄴㅇㄴㄹㄴ')
    socket.on('turn-data', (data)=>{
        console.log(data);
        io.emit('turn-data', data)
    })
})
