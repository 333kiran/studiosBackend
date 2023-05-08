import Subscription from "../models/userSubscription-model.js";

export const userSubcription = async (req,res) => {
    try{
        const exist = await Subscription.findOne({cardNumber:req.body.cardNumber});
        if(exist){
            return res.status(401).json({message:"User already subscribed"});
        }
      const subscription = req.body;
      const newSubscription = new Subscription(subscription);
      await newSubscription.save();
      res.status(200).json(subscription);

    }catch(error) {
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const getAllSubscriptions = async(req,res) => {
    try{
     const subscribers = await Subscription.find();
     res.status(200).json(subscribers);
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const getUserSubscriptionById = async(req,res) => {
    try{
      const id = req.params.id;
      const subscribedUser = await Subscription.findOne({_id:id});
      res.status(200).json(subscribedUser);
    }catch(error) {
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const updateSubscription = async (req,res) => {
    try{
         const updateUser = {
           subscriptionType:req.body.subscriptionType,
             cardholderName:req.body.cardholderName,
             cardNumber:req.body.cardNumber,
             expiryDate:req.body.expiryDate,
             cvv:req.body.cvv,
         }

         const user = await Subscription.findOneAndUpdate({_id:req.params.id},
         {$set:updateUser})
         res.status(200).json(user);

    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const deleteById = async(req,res) => {
    try{
      await Subscription.deleteOne({_id:req.params.id})
     res.status(200).json({message:"Subscribed user delete successfully"})
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}