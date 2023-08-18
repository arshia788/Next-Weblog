import ProfilePage from '@/components/templates/ProfilePage';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import connectDB from '@/utils/connectDB';
import { NextResponse } from 'next/server';

async function page() {

    const session = await getServerSession(authOptions);
    if(!session) redirect('/signin')
    try {
        await connectDB()
    } catch (error) {
        NextResponse.json({status:'failed', message:"failed to connect to DB"})       
    }





    return (
        <div>
            <ProfilePage  session={session}/>
        </div>
    )
}

export default page