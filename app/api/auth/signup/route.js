import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req){

    try {
        await connectDB()
    } catch (error) {
        return NextResponse.json({status:'failed', message:"failed to connect to DB"})
    }

    const {email, password}= await req.json().body;

    if(!email || !password){
        return NextResponse.json({status:'failed', message:"Invalid Data"})
    }

    const user= await User.findOne({email})

    if(user) return NextResponse.json({status:'failed', message:"User exists!"})

    const hashedPassword= await hashPassword(password)

    const newUser= await User.create({email, password:hashedPassword})

    return NextResponse.json({status:'success', message:"User Created"})
}

