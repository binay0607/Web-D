// jshint esversion:6
const express = require("express");
const bodyparser= require("body-parser");

const app=express();
var items=["a","b","c"];
var workitems=[];

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    var today=new Date();
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"

    }
    var day= today.toLocaleDateString("en-us",option);
    res.render("list",{listtittle:day, newlistitem:items});
    // var cday= today.getDay();
    // var day="";
    // // if(cday===6 || cday===0){
    // //     day="weekend";
    // // }else{
    // //     day="weekday";
    // // }
    // // res.render("list",{kindofday:day});
    // switch (cday) {
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
            
    //         break;
    //     case 2:
    //         day="Tuesday";
            
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";9
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    
    //     default:
    //         console.log("Error");
    //         break;

        
    // }
    // res.render("list",{kindofday:day});
});
app.post("/",function(req,res){
    var item=req.body.newitem;
    if(req.body.list==="work")
    {
        workitems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
   
  
})
app.get("/work",function(req,res){
    res.render("list",{listtittle:"work list",newlistitem: workitems});
})
app.post("/work",function(req,res){
    let item=req.body.newitem;
    workitems.push(item);
    res.redirect("/work");
})


app.listen(3000, function(){
    console.log("server is running at port 3000");
});
