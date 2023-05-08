import User from "../models/user-schema.js";

export const registerUser = async(req,res) => {
    try{
        const exist = await User.findOne({email:req.body.email})
        if(exist){
           return res.status(401).json({message:"user already exists"});
        }
        
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json(user);
        console.log(user);


    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const loginUser = async(req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
         const user = await User.findOne({email:email,password:password});
         if(user){
            res.status(200).json(user);
            console.log(user);
         }
         else{
            res.status(401).json({message:"Invalid Login"});
         }
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const getAllUsers = async(req,res) => {
    try{
       const users = await User.find();
       res.status(200).json(users);

    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
  
    }
}

export const getUserById = async(req,res) => {
    try{
      const user = await User.findOne({_id:req.params.id})
      res.status(200).json(user);

    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const updateUserById = async(req,res) => {
    try{
        const details = req.body;
        const updatedUser = await User.findOneAndUpdate({_id:req.params.id},
            {
                $set:details
            })
      res.status(200).json(updatedUser);
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const deleteUserById = async(req,res) => {
    try{
      await User.deleteOne({_id:req.params.id})
     res.status(200).json({message:" user account delete successfully"})
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}