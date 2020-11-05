const express=require("express");
const app=express();

var PORT=process.env.PORT || 3000;

app.set("view engine","ejs");
app.use(express.static("public"))

app.listen(PORT,function(){
    console.log("Connected");
})

app.get("/",function(req,res){
    res.render("visualizer");
})