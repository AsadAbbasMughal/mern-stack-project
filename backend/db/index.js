import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js';
import dotenv from 'dotenv'

dotenv.config()
export const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
        // console.log('MongoDb connected', connectionInstance);
        

    }catch(error){
        console.log("Mongodb Connection error -->", error.message);
        process.exit(1)

    }
}
