import User from "../models/User";
import bcrypt from "bcrypt";


export const getAllUsers = async(req,res,next)=>{
    let users;
    //always use try catch block when dealing with database
    try{
        users= await User.find();
    }
    catch(err){
        console.log(err);
    }

    if(!users){
        return res.status(404).json({message: "No Users Found"});
    }
    return res.status(200).json({ users });
};

export const signup = async (req,res, next)=>{
    const {name, email, password}= req.body;
    let existingUser;

    try{
        existingUser= await User.findOne({email});  //as we have defined the same name it will automatically use it as key, value pair
    }
    catch(err){
         return console.log(err);
    }
    if(existingUser){
        return res.status(400).json({ message: "User already exists! Log In instead" }); 
    }
    // const hashedPassword= bcrypt.hashSync(password);
    const user= new  User({
        name,
        email,
        password,
        blogs: []
    });

    try{
        await user.save();
    }
    catch(err){
         return console.log(err);
    }
    return res.status(201).json({user});
};

export const login= async (req,res,next)=>{
    const {email, password} =req.body;
    let existingUser;

    try{
        existingUser= await User.findOne({email});  //as we have defined the same name it will automatically use it as key, value pair
    }
    catch(err){
         return console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({ message: "Couldn't find the user! try singing up" }); 
    }
    if(existingUser.password=== password){
        return res.status(200).json({message: "Login Successful"});
    }else{
        return res.status(404).json({message: "Incorrect Password"});
    }


}

