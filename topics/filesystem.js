const express=require('express');
const app=express();
const fs = require('fs');
fs.mkdir('murgan',(err)=>{
   if(err){
    console.log(err);
    return
   }
})
fs.rmdir('murgan',(err)=>{
    if(err){
     console.log(err);
     return
    }
 })