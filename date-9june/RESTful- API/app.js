const express= require("express");
const bodyParser= require("body-parser");
const mongoose = require("mongoose");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


mongoose.connect("mongodb://localhost:27017/restDB", {useNewUrlParser: true});
const articleSchema= {
    name: String,
    content: String
}

const Article= mongoose.model("article", articleSchema);

app.get("/", function(req,res){
    res.send("Hello There!");
});




app.route("/articles")
    .get(function(req,res){
        Article.find(function(err, foundItems){
            if(!err){
                res.send(foundItems);
            }else{
                res.send(err);
            }
        })
    })

    .post( function(req, res){

        const newArticle= new Article({
            name: req.body.name,
            content: req.body.content
        })
        newArticle.save(function(err){
            if(!err){
                res.send("Successfully Posted");
            }else{
                res.send(err);
            }
        });
        
    })

    .delete( function(req,res){
        Article.deleteMany(function(err){
            if(!err){
                res.send("Successfully deleted all items");
            }else{
                res.send(err);
            }
        })
    });

app.route("/articles/:tag")
.get(function(req,res){
    Article.findOne({name: req.params.tag}, function(err, foundItem){
        if(foundItem){
            res.send(foundItem);
        }else{
            res.send("No such Article found");
        }
    });
})

.put(function(req,res){
    Article.updateOne(
        {name: req.params.tag},
        {name: req.body.name, content: req.body.content},
        function(err,results){
            if(!err){
                res.send("Updated Successfully");
            }else{
                res.send("there was some problem");
            }
        }
    )
})

.patch(function(req,res){
    Article.updateOne(
        {name: req.params.tag},
        {$set: req.body},    //simply writing req.body will also work
        function(err){
            if(!err){
                res.send('Updated Successfully');
            }
        }
    )
})

.delete(function(req,res){
    Article.deleteOne(
        {name: req.params.tag},
        function(err){
            if(!err){
                res.send("Deleted Successfully");
            }
        }
    )
});
















app.listen(3000, function(){
    console.log("server running on port 3000");
});
