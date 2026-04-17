import mongoose from "mongoose"

const url = "mongodb+srv://sounak:sounak@cluster0.c89pf66.mongodb.net/"

export async function dbConnect(){
    try {
        await mongoose.connect(url)
        console.log("Mongo Db Connected"); 
    } catch (error) {
        console.log("Mongo Db not Connected", error);
    }
}