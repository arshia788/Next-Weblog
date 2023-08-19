import SignIpPage from '@/components/templates/SignInPage';

import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function page() {

  // to version app bayad in shekli kar har ro anjam bedi.
  
  // ! havaset bashe ke to app bayad to file .env on 2 ta ezafeh bokoni. 
  const session= await getServerSession(authOptions);
  if(session) redirect('/') 

  return (
    <div>
      <SignIpPage />
    </div>
  )
}

export default page