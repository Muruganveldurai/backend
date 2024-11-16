const express=require('express');
const app=express();

app.use(function(req,res,next){
    console.log("start");
    next();
})
app.get('/',function(req,res,next){
    res.send('midle');
    next();
})
app.use("/",function(req,res){
    console.log('end');
})
app.listen(4000,function(){})