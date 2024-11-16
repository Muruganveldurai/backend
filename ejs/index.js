const express=require('express')
const app=express();

app.set("view engine","ejs")

app.get('/',function(req,res){
    res.render("pages/home.ejs")
})
app.listen(8000,function(){
    console.log("listening")
})