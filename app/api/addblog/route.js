import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import {getServerSession} from 'next-auth';
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";






export async function POST(req){

    try {
        await connectDB()
    } catch (error) {
        NextResponse.json({status:'failed', message:"Failed to connect to DB"})
    }

    const body= await req.json();
    console.log(body);
    const {title,author,info,date, likes}= body;

    if(!title || !info ){
        NextResponse.json({status:'failed', message:"Fill the inputs"})
    }

    const session= await getServerSession(authOptions)

    if(!session) NextResponse.json({status:'failed', message:"You are not logged in"})

    const user= await User.findOne({email:session.user.email})

    if(!user) NextResponse.json({status:'failed', message:"User doen'ts exists"})

    user.blogs.push({title,author,info,date, likes})
    user.save()

    return NextResponse.json({status:'success', message:"Blog Created."})

}











