var express = require('express');

// app es la funcion express
var app = express();

app.set('view engine','pug');

app.use(express.static('public'));

app.get('/', function(req, res){
    //res.send("hola proyecto productivo");
    res.render('index');
})

app.get('/login', function(req, res){
    res.render('index');
})

app.get('/api/footercard', function(req, res){

    var footercard = [
        {
            
        },
        {

        }
    ]
})


app.listen(8000, function(err){
    if(err){
        //con process. exit le decimos que termine la aplicacion si hay un error
        return console.log('hubo un error'), process.exit(1);
    }else{
        console.log('escuchando en el puerto 8000');
    }
})