import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";


export async function GET(req){


    return NextResponse.json({status:'success'})
}






