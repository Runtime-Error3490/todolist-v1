const express=require("express")
const bodyparser=require("body-parser");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js")

const app=express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
let items=["Buy food","Cook Food","Eat Food"];
let workItems=[];
app.get("/",function(req,res){
    let day=date.getDate();
    res.render("list",{kindofday:day,newlist:items}); 
    //key value pair
});
app.post("/",function(req,res){
    let item=req.body.newItem;
    console.log(req.body.list)
    if(req.body.list==="Work")
    {
        workItems.push(item)
        res.redirect("/work")
    }
    else{
    if(item.length!=0)
    {
    items.push(item);
    res.redirect("/");
    }
    }
    
    //body parser use karne kae liye
    //we look into body of the post
});
app.get("/work",function(req,res){
    res.render("list",{kindofday:"Work List",newlist:workItems})
});
app.post("/work",function(req,res){
    let item=req.item.newItem;
    workItems.push(item);
    res.redirect("/work");
})
app.get("/about",function(req,res){
    res.render("about");
})
app.listen(3000,function(){
    console.log("Server started at port 3000");
});