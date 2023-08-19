import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export async function GET(req){

    try {
        await connectDB()
    } catch (error) {
        return NextResponse.json({status:'failed', message:"failed to connect to DB"})
    }

    const session= await getServerSession(authOptions)

    const user= await User.findOne({email:session.user.email})

    if(!user) return NextResponse.json({status:'failed', message:"No users exists"});

    const myBlogs= user.blogs
    
    return NextResponse.json({status:'success', data:myBlogs})
}






