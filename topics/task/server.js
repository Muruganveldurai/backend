const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(express.json(bodyparser.json()));
let products=[
    {id:1,
        product:'t-shirt'

    },
    {id:2,
        product:"jeans"
    }
    ]
app.get("/",function(req,res){
    res.send(products)
})
app.post("/items",function(req,res){
    const mur={
        id:req.body.id,
        product:req.body.product
    }
    products.push(mur)
    console.log(products)
    res.send(products)

    }

)
app.listen(5000,()=>{
    console.log("running");

})