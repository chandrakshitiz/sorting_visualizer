const express=require("express");
const app=express();

const PORT=process.env.PORT || 3000;

app.set("view engine","ejs");

app.use(express.static("public"));

app.listen(PORT,function(){
    console.log('Listening on Port : '+PORT);
});

app.get("/",function(req,res){
    res.render("visualizer");
});