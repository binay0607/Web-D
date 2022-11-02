import express from "express";
import mongoose from "mongoose";
import blogrouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from 'cors';
const app= express();
app.use(cors());
app.use(express.json()); // instead of body parser we use this
app.use("/api/user",router);
app.use("/api/blogs",blogrouter);
mongoose.connect('mongodb://admin:binay671@ac-hnoagil-shard-00-00.fbexree.mongodb.net:27017,ac-hnoagil-shard-00-01.fbexree.mongodb.net:27017,ac-hnoagil-shard-00-02.fbexree.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-u6qvrv-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=> console.log("Connected to Database ans Listening on port 5000"))
.catch((err)=>console.log(err)
);



