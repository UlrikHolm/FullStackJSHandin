import mongoose from "mongoose";
require('dotenv').config({ path: '.env' })

//Mongo connection

const CONNECTION = process.env.CONNECTION
mongoose.connect(CONNECTION,{useUnifiedTopology:true, useNewURLParser:true})

const friendSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    gender: {type:String},
    age: {type: Number},
    language: {type:String},
    email: {type:String},
    contacts: {type: Array}
  })
  
  const Friends = mongoose.model("friends",friendSchema);
  export {Friends}