import mongoose from "mongoose";

const connectDB = async () =>{

    try {
        mongoose.Connection.on("connected",()=>{
            console.log("MongoDB connected");
        })
        const mongoDbUrl = process.env.MONGODB_URI;
        const projectName = "Kalpavya";

        if(!mongoDbUrl)
        {
            throw new error("please connect mongodb");
        }
        await mongoose.connect(mongoDbUrl, {dbName:projectName});

    } catch (error) {
        console.log(error);
    }
}
export default connectDB;