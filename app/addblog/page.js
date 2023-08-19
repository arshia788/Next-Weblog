import AddBlogPage from '@/components/templates/AddBlogPage'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'


async function page() {

  const session= await getServerSession(authOptions)
  if(!session) redirect('/signin')

  return (
    <div>
        <AddBlogPage />
    </div>
  )
}

export default page