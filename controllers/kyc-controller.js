import Kyc from "../models/kyc-model.js";


export const addKycDetails = async(req,res) => {
    try{
        const exist = await Kyc.findOne({adhaarCardNumber:req.body.adhaarCardNumber});
        if(exist){
            return res.status(401).json({message:"Kyc already added"});
        }
    const kyc = req.body;
    const newKyc = new Kyc(kyc);
    
    await newKyc.save();
    res.status(200).json(kyc);

    }catch(error){
      res.status(500).json({message:error.message});
      console.log(error.message);
    }
}

export const getAllKyc = async(req,res) => {
    try{
     const kyc = await Kyc.find();
     res.status(200).json(kyc);
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const getKycById = async (req,res) => {
    try{
   const kycById = await Kyc.findOne({_id:req.params.id});
   if(kycById){
   return res.status(200).json(kycById);
   }
        res.status(400).json({message:"user not found"});
    }catch(error) {
        res.status(500).json({message:error.message});
        console.log(error.message);
    }

}

export const updateKycById = async(req,res) => {
    try{
        const details = req.body;
        const updatedKyc = await Kyc.findOneAndUpdate({_id:req.params.id},
            {
                $set:details
            })
      res.status(200).json(updatedKyc);
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const deleteKycById = async(req,res) => {
    try{
      await Kyc.deleteOne({_id:req.params.id})
     res.status(200).json({message:" user's KYC delete successfully"})
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}