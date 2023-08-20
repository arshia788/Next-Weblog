import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function PATCH(req){

    const query= new URL (req.url);
    const splitQuery = query.pathname;
    const queryId= splitQuery.split('/')[3];


    try {
        await connectDB()
    } catch (error) {
        return NextResponse.json({status:'failed', message:"Failed to connect to DB"})
    }

    const body= await req.json();
    const {title, info}= body.data

    if(!title || !info) return NextResponse.json({status:'failed', message:"Invalid data"});

    const session= await getServerSession(authOptions);
    const user= await User.findOne({email:session.user.email});

    const blogData= user.blogs.find(item=>{
        const blogIndex= item['_id'] 
        
        if(blogIndex.toString() === queryId) return item
    })

    blogData.title= title || blogData.title;
    blogData.info= info || blogData.info;
    user.save();

    return NextResponse.json({status:'success'})
}