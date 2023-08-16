import {Schema, models, model} from 'mongoose';


const userSchema= new Schema({
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    blogs:[
        {
            title:String,
            info:String,
            author:String,
            createdAt:{
                type:Date,
                default:()=>Date.now(),
            },
            likes:{
                type:Number,
                default:0
            }
        }
    ],
    createdAt:{
        type:Date,
        default:()=>Date.now(),
    },
})


const User= models.User || model("User", userSchema)

export default User;