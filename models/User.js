import {Schema, models, model} from 'mongoose';


const userSchema= new Schema({
    email:{
        type:String,
        Required:true
    },

    password:{
        type:String,
        Required:true
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
            },
            likedBy:{
                type:Array,
                default:[]
            }
            ,
        }
    ],
    createdAt:{
        type:Date,
        default:()=>Date.now(),
    },
    name:{
        type:String
    }
    ,
    lastname:{
        type:String
    }
})


const User= models.User || model("User", userSchema)

export default  User;