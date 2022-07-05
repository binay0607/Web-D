const express= require("express");
const bodyParser= require("body-parser");
const date= require(__dirname+"/date.js");
const mongoose = require("mongoose");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


// var items=["write your notes here","click on them to mark them done"];
// var goals=[];

//connect to the mongodb data base
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

//create a schema for your data
const itemSchema= {
    name: String
};

//create a model out of it
const Item= mongoose.model("item", itemSchema);

//new datas intialization
const item1= new Item({
    name: "write your notes here"
});
const item2= new Item({
    name: "click on them to mark them done"
});

//inserting in db --> if you have many items make an array first 
var itemArr= [item1,item2];
// Item.insertMany(itemArr, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully Added Default Items");
//     }
// });

//Deleting in db
// Item.deleteOne({_id: "62c3e202c6a061a46e427824"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("deleted successfully");
//     }
// });




app.get("/", function(req,res){
    let day= date.getDate();
    // accessing the database
    Item.find({}, function(err, foundItems){
        // to not add it again and again
        if(foundItems.length===0){
            Item.insertMany(itemArr, function(err){
                if(err){console.log(err);}
                else{console.log("Successfully Added Default Items");}
            });
            res.redirect("/");
        }else{
            //rendering with database data
            res.render("tmplt",{
                title: day,
                items: foundItems   //tap into founditems.name in tmplt.ejs file
            });
            
        }
        
    });
    
    
});
//deleting items on list--> also check tmplt for more info
app.post("/delete",function(req,res){
    const itemID= req.body.checkbox;
    Item.deleteOne({_id:itemID},function(err){
        if(err){
            console.log(err);
        }else{
            console.log(" Task Deleted Successfully");
        }
    });
    res.redirect("/");

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
    const item= req.body.newItem;

    const nItem =new Item({
        name: item
    });

    nItem.save();
    res.redirect("/");
    
    
    
    
});


// app.post("/goals", function(req,res){
//     let item= req.body.newItem;
//     items.push(item);
//     res.redirect("/goals");
// });

app.listen(3000, function(){
    console.log("server running on port 3000");
});


