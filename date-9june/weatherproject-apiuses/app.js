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
    var urlForGeo="https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=1&appid=38bd5cf6b388a7ae15be7f830c1fd17d";
    
    // window.latt="";
    // window.lonn="";
    
    https.get(urlForGeo,function(response){
       
        response.on("data",function(data){
            var geoData=JSON.parse(data);
            var latt=geoData[0].lat;
            var lonn=geoData[0].lon;
            const url="https://api.openweathermap.org/data/2.5/weather?lat="+latt+"&lon="+lonn+"&appid=38bd5cf6b388a7ae15be7f830c1fd17d&units=metric";
            https.get(url,function(response){
                response.on("data", function(data){
                    var wdata= JSON.parse(data);
                    var temprature= wdata.main.temp;
                    var desc= wdata.weather[0].description;
                    var icon=wdata.weather[0].icon;
                    var iconurl ="http://openweathermap.org/img/wn/"+icon+"@2x.png";
                    res.write("<body style='background-color:#F2D7D9; text-align:center;'></body>");
                    res.write("<h1 style='margin-top:100px;'>The temprature in "+city+ " is "+ temprature + " degrees celsius.</h1>");
                    res.write("<h3 style='margin-bottom=0'>Weather Description : "+ desc+".</h3>");
                    res.write("<img src="+ iconurl+ ">");
                    res.send();
                    
                });
            });
            
            
        });
    });
   
    
   

    
});









app.listen(3000, function(){
    console.log("server started on port 3000!");
});