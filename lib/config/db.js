import mongoose from "mongoose";

export const ConnectDB = async()=>{
    await mongoose.connect("mongodb+srv://elijahndenwa19:eliNEXT1993@cluster0.ex0a6yp.mongodb.net/graceforimpact-web")
    .then((c)=>{
        console.log(`Database Connected with ${c.connection.host}`);
    })
    .catch((e)=>{
        console.log("Connection Failed",e);
    })
}