import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
import User from "@/models/User";

import sortBlogs from "@/utils/sortBlogs";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req){
    try {
        await connectDB()
    } catch (error) {
        return NextResponse.json({status:'failed', message:"Failed to conenct to DB"})
    }

    const session= await getServerSession(authOptions)
    
    const users= await User.find()

    const newData= sortBlogs(users);


    return NextResponse.json({status:'success',data:newData})
}
