
import { getServerSession } from 'next-auth';
import BlogForm from '../modules/BlogForm';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function AddBlogPage() {

    const session= await getServerSession(authOptions)
    if(!session) return redirect('/')
    
    return (
        <div>

            <h2 className='my-4 font-semibold text-blue-700 text-center text-lg'>Create Your Own Blog</h2>

            <BlogForm />
        </div>
    )
}

export default AddBlogPage