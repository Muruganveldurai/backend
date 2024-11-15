const http=require('http');
const path=require('path');
const PORT=3000;
const server=http.createServer((req,res)=>{
   // res.writehead(200,{'content-type':'text/html'});
    res.end('<h1>Hi murugan </h1>')
});
server.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})