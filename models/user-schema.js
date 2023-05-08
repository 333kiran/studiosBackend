import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:25,
    },
    lastName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:25,
    },
    email:{
        type:String,
        required:true,
        trim: true,
        unique:true,
        lowercase: true
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,

    },
    password:{
        type:String,
        required:true,
    },
    reTypePassword:{
            type:String,
            required:true,
    },
    panNumber:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10,
    },
    gstNumber:{
        type:String,
        required:true,
        minlength:15,
        maxlength:15,
    },
    userType:{
        type:String,
        required:true,
    },
    entityName:{
        type:String,
        required:true,
    },
})

const User =  mongoose.model("user",userSchema);

export default User;