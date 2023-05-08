import mongoose from 'mongoose';

const bankDetailsSchema = new mongoose.Schema({
    bankName:{
        type:String,
        required:true,

    },
    accountNumber:{
        type:Number,
        required:true,
        minlength:11 ,
        maxlength: 14,

    },
    ifscCode:{
        type:String,
        required:true,
        trim:true
    },
    accountHolderName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:25,
    },
    accountType:{
        type:String,
        required:true,
    }
})

const BankDetails = mongoose.model("bankDetail",bankDetailsSchema);

export default BankDetails;