import mongoose from "mongoose";

export const connectDb = async ()=>{
    await mongoose.connect('mongodb+srv://kaleb:098765@cluster0.uhfd7a1.mongodb.net/food-del').then(()=>console.log('db connected'))
                   .catch((err) => console.error('❌ Connection failed:', err.message));

} 
//102.218.50.228/32(includes your current IP address)
// test-db.js 
