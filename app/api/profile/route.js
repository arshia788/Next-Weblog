import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

import { NextResponse } from "next/server";

export async function POST(req){

    try {
        await connectDB()
    } catch (error) {
        return NextResponse.json({status:'failed', message:"Failed to connect to DB"})    
    }

    const body= await req.json();
    console.log(body);

    const {name, lastname, password}= body.data;

    if(!name || !lastname || !password) return NextResponse.json({staus:'failed', message:"invalid data"})

    const session= await getServerSession(authOptions)

    const user= await User.findOne({email:session.user.email})

    if(!user) return NextResponse.json({status:'failed', message:"Failed to connect to DB"})

    const isValid= await verifyPassword(password, user.password)

    if(!isValid) return NextResponse.json({status:'failed', message:"Password is wrong"});

    user.name=name;
    user.lastname=lastname;
    user.save();

    return NextResponse.json({status:'success', message:"Info Added."})


}






