const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var w=req.body.weight;
  var h=req.body.height;
  var result=w/h;
  res.send("Your BMI is "+result);
});
app.listen(3000,function(){
   console.log("Server is running at 3000");
})