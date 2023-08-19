import MyBlogs from '@/components/templates/MyBlogs';

import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import User from '@/models/User';
import connectDB from '@/utils/connectDB';
import { NextResponse } from 'next/server';


async function page() {


    const session= await getServerSession(authOptions)
    console.log(session);
    
    if(!session) redirect('/signin')

    try {
        await connectDB()
    } catch (error) {
    return NextResponse.json({status:"failed to connect to DB"})
    }

    const user= await User.findOne({email:session.user.email})
    const data= user.blogs;

    

    return (
        <div>
            <MyBlogs data={data}/>
        </div>
    )
}

export default page