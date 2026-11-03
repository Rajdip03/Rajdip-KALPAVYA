import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    imagUrl:{
        type: String,
        required:true,
    },
    cartItems:{
        type:Object,
        default:{},
    },
},{
    minimize:false
});
const User = mongoose.model("User", userSchema);
export default User;