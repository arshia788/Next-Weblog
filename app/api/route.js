import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(req){

    try {
        await connectDB()
    } catch (error) {
        NextResponse.json({status:'failed', message:'failed to connect to DB'})
    }
    
}

