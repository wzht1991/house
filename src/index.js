const express=require("express");
const app= express();
app.get("/",(req,res)=>{
    res.send("welcome");
})
app.listen(3000,()=>{
    console.log("port 3000 is listening");
})
  
