const express=require('express')
const router=express.Router();
const path=require("path")
router.get("/",function(request,response){
     return response.send("hello world!");
});
router.get("/home",function(request,response){
    response.status(200).sendFile(path.join(__dirname+"/../public/home.html"));
});
router.get("/produit",function(request,response){
   
    response.status(200).sendFile(path.join(__dirname+"/../public/produit.html"));
});

router.get('/client',function(request,response){
    response.status(200).sendFile(path.join(__dirname+"/../public/client.html"));
})
module.exports=router