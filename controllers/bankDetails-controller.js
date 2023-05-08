import BankDetails from "../models/bankDetails-schema.js"

export const addBankDetails = async(req,res) => {
    try{
     const exist = await BankDetails.findOne({accountNumber:req.body.accountNumber});
     if(exist){
        return res.status(401).json({message:"Bank Details already exists"});
     }

     const bankDetails = req.body;
     const newBankDetails = new BankDetails(bankDetails);
     await newBankDetails.save();
     res.status(200).json(bankDetails);

    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const getAllBankDetails = async(req,res) => {
    try{
       const bankDetails = await BankDetails.find();
       res.status(200).json(bankDetails);

    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
  
    }
}

export const getBankDetailsById = async(req,res) => {
    try{
      const bankDetails = await BankDetails.findOne({_id:req.params.id})
      res.status(200).json(bankDetails);

    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const updateBankDetails = async(req,res) => {
    try{
    const bankDetails = {
     bankName:req.body.bankName,
     accountNumber:req.body. accountNumber,
     ifscCode:req.body.ifscCode,
     accountHolderName:req.body.accountHolderName,
     accountType:req.body.accountType
    }
    const updatedDetails = await BankDetails.findOneAndUpdate({_id:req.params.id},
        {
            $set:bankDetails
        })
        res.status(200).json(updatedDetails);
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const deleteBankDetailsById = async(req,res) => {
    try{
      await BankDetails.deleteOne({_id:req.params.id})
     res.status(200).json({message:" user's bank details delete successfully"})
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}