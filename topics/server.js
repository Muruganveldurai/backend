var express= require('express');
var app= express();
var path=require('path');
var bodyparser=require('body-parser');
var mur=require('./export');



app.use(express.static('./public'))//static is used to show everyone


console.log(mur(10,20,30));


app.listen(3000, function() {  
    console.log('Server running');
    console.log();
    
})


