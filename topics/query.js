const express= require('express');
const app =express();
const path=require('path');
const bodyparser=require('body-parser');
app.use(express.json(bodyparser.json()));
const urlencodedparser=bodyparser.urlencoded({extended:false});
   
   
   
   app.get('/name',function(req,res) {
   
    console.log(req.query);
 } )

app.listen(9000,function(){
    console.log('pot');
})