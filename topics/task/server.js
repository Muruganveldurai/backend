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
    const products={
        id:req.body.id,
        product:req.body.product
    }
    products.push(products)
    console.log(products)
    res.status(201).send({'data':products,'message':'Item Added','code':201});

    })
 app.put("/items",function(req,res){
    const products={
        id:req.body.id,
        product:req.body.product
    }
    console.log(products.product)
    products.forEach((e)=>{
        if (e.id==products.id)
            e.id=products.id
            e.product=products.product
        res.status(202).send({'data':product,'message':'put code','code':202});
    })
    })
    app.delete("/items",function(req,res){
         const products={
        id:req.body.id,
        product:req.body.product
         }
         products.splice(index,1);
         res.status(202).send({'data':product,'message':'put code','code':202});


        }
    )
    


app.listen(5000,()=>{
    console.log("running");

})