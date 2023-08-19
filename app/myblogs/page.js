'use client';

import MyBlogs from '@/components/templates/MyBlogs';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

function page() {

    const {data}= useSession()
    if(!data) redirect('/signin')


    return (
        <div>
            <MyBlogs />
        </div>
    )
}

export default page