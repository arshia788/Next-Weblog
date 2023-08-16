import SignUpPage from '@/components/templates/SignUpPage';

import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';


 async function route(req) {

  const session= await getServerSession(authOptions)
  if(session) redirect('/')

  return (
    <div>
      <SignUpPage />
    </div>
  )
}

export default route