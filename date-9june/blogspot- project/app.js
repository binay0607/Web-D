const express = require("express");
const bodyParser = require("body-parser");
const _= require("lodash");
const ejs = require("ejs");

const homeStartingContent = "Welcome to my blog. I am binay prasad, a B.Tech 4th year student. I am a studing in the field of computer science. I have great interest in competitive programming, Web Development and Machine Learning.And hence I write blogs about the same. I am currently searchin for new intership/job opportunity.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const posts=[];


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
  res.render("home",{
    startingContent:homeStartingContent,
    allPosts: posts
  });
});

app.get("/about", function(req,res){
  res.render("about",{
    aboutContent: aboutContent
  });
});

app.get("/contact", function(req,res){
  res.render("contact", {
    contactContent:contactContent
  });
});



app.get("/compose",function(req,res){
  res.render("compose");
});

app.get("/posts/:postName", function(req,res){
  const reqstTitle=_.lowerCase(req.params.postName);
  var check=true;
  posts.forEach(function(post){
    var storedPost= _.lowerCase(post.title);
    if(storedPost=== reqstTitle){
      check=false;
      res.render("post",{
        title: post.title,
        body: post.body
      })
    }
  });
  if(check){
    res.render("notFound");
  }

});


app.post("/compose", function(req,res){
    const post={
      title: req.body.postTitle,
      body: req.body.postBody
    }
    posts.push(post);
    res.redirect("/");
})










app.listen(3000, function() {
  console.log("Server started on port 3000");
});
