const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended: true})) 
const PORT = 8080;


app.listen(PORT, function(){
    console.log('listening on 8080');
});

app.post('/turnchoice', (req, res)=>{
    console.log(req.body)
    res.redirect('/')
})
