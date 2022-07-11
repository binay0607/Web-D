const express= require("express");
const https= require("https");
const bodyParser=require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
   
});
app.post("/", function(req,res){
    console.log(req.body.cityName);
    var city=req.body.cityName;
    var urlForGeo="https://stormy-ocean-60726.herokuapp.com/articles";
    
    // window.latt="";
    // window.lonn="";
    
    https.get(urlForGeo,function(response){
       
        response.on("data",function(data){
            var articleData=JSON.parse(data);
            articleData.forEach(function(el){
                if(el.name=="binay"){
                    res.send(el.content);
                }
            })

           
            
            
        });
    });
   
    
   

    
});









app.listen(3000, function(){
    console.log("server started on port 3000!");
});