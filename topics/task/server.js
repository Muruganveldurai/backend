const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(express.json(bodyparser.json()))
let products=[
    {id:1,
        product:'t-shirt'

    },
    {id:2,
        product:"jeans"
    }
    

]
app.get("/items",function(req,res){
    res.send(products)
})
app.listen(5000,()=>{
    console.log("running");

})