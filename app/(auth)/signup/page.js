import SignUpPage from '@/components/templates/SignUpPage';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
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