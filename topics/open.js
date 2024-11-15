const fs =require('fs');
fs.open("./view/input.txt",'r+',(err,fd)=>{
    if(err){
        console.error(err)
        return err
    }


    fs.writeFile("./view/input.txt",'murgan',(err)=>{
        if (err){
            console.error(err);
            return err
        }
        console.log("data added");
        
    })
    fs.readFile("./view/input.txt",(err,data)=>{
        if (err){
            console.error(err);
            return err
        }
        console.log(data.toString());
        
    });
    fs.appendFile("./view/input.txt"," kumar",(err)=>{
        if (err){
            console.log(err);
            return 
        }
       
    })
    fs.close(fd,(err)=>{
        if (err){
            console.log(err);
            return 
        }
       
    })
  
    
})

fs.unlink('./view/input.txt',(err)=>{
    if (err){
        console.log(err);
        return 
    }
    console.log('running')
   
});
