import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import User from "@/models/User";

export async function GET(req){

    const query= new URL(req.url);
    const getHref= query.href.split('/')[5];

    try {
        await connectDB()
    } catch (error) {
        return NextResponse.json({status:'failed', message:"Failed to connect to DB"})
    }

    const session= await getServerSession(authOptions);

    if(!session) return NextResponse.json({status:'failed', message:"You are not logged!"})

    const user= await User.findOne({email:session.user.email});

    if(!user) return NextResponse.json({status:"failed", message:"User doesn't exists"})

    return NextResponse.json({status:'success'})

}
