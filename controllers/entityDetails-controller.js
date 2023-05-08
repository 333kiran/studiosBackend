import Entity from "../models/entityDetails-schema.js";

export const addEntityDetails = async(req,res) => {
    try{
        const details = req.body;
        const newDetails = new Entity(details)
        await newDetails.save();
        res.status(200).json(details);
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);

    }
}

export const getAllEntities = async(req,res) => {
    try{
     const entityDetails = await Entity.find();
     res.status(200).json(entityDetails);
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);

    }
}

export const getEntityById = async(req,res) => {
    try{
        const entityDetails = await Entity.findOne({_id:req.params.id});
        res.status(200).json(entityDetails);

    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const updateEntityDetails = async(req,res) => {
    try{
        const details = req.body;
        const updatedDetails = await Entity.findOneAndUpdate({_id:req.params.id},
            {$set:details});
            res.status(200).json(updatedDetails);
    }catch(error) {
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}

export const deleteEntityById = async(req,res) => {
    try{
      await Entity.deleteOne({_id:req.params.id})
     res.status(200).json({message:" user's entity delete successfully"})
    }catch(error){
        res.status(500).json({message:error.message});
        console.log(error.message);
    }
}