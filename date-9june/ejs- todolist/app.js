const express= require("express");
const bodyParser= require("body-parser");
const date= require(__dirname+"/date.js");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


var items=["write your notes here","click on them to mark them done"];
var goals=[];



app.get("/", function(req,res){
    let day= date.getDate();
    // let day= date.getDay();
    res.render("tmplt",{
        title: day,
        items: items
    });

});

app.get("/goals", function(req,res){
    res.render("tmplt",{
        title: "My Goals",
        items: goals
    });
});

app.get("/about",function(req,res){
 res.render("about");
});

app.post("/", function(req,res){
    let item= req.body.newItem;
    
    console.log(item.length);
    if(item.length==0){
    
        res.redirect("/");
    }else{
        if(req.body.list== "My"){
            goals.push(item);
            res.redirect("/goals");
        }else{
            items.push(item);
            res.redirect("/");
        }
    }
    
    
    
    
});

// app.post("/goals", function(req,res){
//     let item= req.body.newItem;
//     items.push(item);
//     res.redirect("/goals");
// });

app.listen(3000, function(){
    console.log("server running on port 3000");
});


