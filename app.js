const express=require('express')
const app=express()
var router=require('./routes/mesRoutes.js')
app.use(router)
app.listen(3000,function(){
    console.log("the server is running on port 3000");
});