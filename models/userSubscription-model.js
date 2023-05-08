import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    subscriptionType:{
        type:String,
        required:true
    },
    cardholderName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:25,

    },
    cardNumber:{
        type:Number,
        required:true,
        minlength:16,
        maxlength:16,
    },
    expiryDate:{
        type:Date,
        required:true,
    },
    cvv:{
        type:Number,
        required:true,
        minlength:3,
        maxlength:3,
    }
})

const Subscription = mongoose.model("subscription",subscriptionSchema);

export default Subscription;