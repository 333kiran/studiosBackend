import mongoose from 'mongoose';

const entitySchema = new mongoose.Schema({
   entityType:{
      type:String,
      required:true,
   },
   businessNature:{
      type:String,
      required:true,
   },
   website:{
       type:String,
   },
   gst:{
        type:String,
        required:true,
        minlength:15,
        maxlength:15,
   },
   corporateAddress:{
    type:String,
        required:true,
   },
   email:{
    type:String,
    required:true,
    trim: true,
    unique:true,
    lowercase: true
   },
   mobile:{
    type:Number,
    required:true,
    minlength:10,
    maxlength:10,

   }
})

const Entity = mongoose.model("entity",entitySchema);

export default Entity;