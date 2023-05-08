import mongoose from 'mongoose';
mongoose.set('strictQuery', true);


export const connection = async(URL) => {
    try{
     await mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
      })
      console.log("databse connected successfully");
    }
    catch(error){
        console.log("error while connecting with database",error.message);
    }

}

export default connection;