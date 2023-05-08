import mongoose from 'mongoose';

const kycSchema = new mongoose.Schema({
    panNumber:{
        type:String,
        minlength:10,
        maxlength:10,
    },
    udhyamRegistrationCertificateNumber:{
        type: String,
        minlength:19,
        maxlength:19,
        
    },
    adhaarCardNumber:{
        type:Number,
        required:true,
        minlength:12,
        maxlength:12,
    },
    lastYearTurnover:{
        type:String,
        
    },
    uploadPan:{
        type:String,
        required:true

    },
    uploadIdProof:{
        type:String,
        required:true


    },
    uploadAddressProof:{
        type:String,
        required:true



    },
    uploadEntryProof:{
        type:String,
        required:true



    },
    uploadGstDocument:{
        type:String,
        required:true



    },
    lastAuditedBalanceSheet:{
        type:String,
        required:true


    },
    uploadCancelCheque:{
        type:String,
        required:true


    },
    uploadBankStatement:{
        type:String,
        required:true

    }

})

const Kyc = mongoose.model("kyc",kycSchema);

export default Kyc;