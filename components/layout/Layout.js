import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import LogOutButton from "../modules/LogOutButton";


async function Layout({ children }) {

    const session = await getServerSession(authOptions);
    
    return (
        <div className="p-1">

            <header className='w-10/12 mx-auto bg-blue-700 rounded-sm py-3 px-2 flex justify-between items-center'>
                <h1 className="text-white text-lg font-semibold xs:mr-3">
                    <Link href='/'>NextBlog</Link>
                </h1>

                <ul className="flex items-center gap-x-4 text-white xs:text-sm">
                    <li>
                        <Link href="/blogs">My Blogs</Link>
                    </li>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link href="/addblog">Add-Blog</Link>
                    </li>

                    <LogOutButton session={session}/>
                    
                </ul>

            </header>

            <div className='w-10/12 mx-auto min-h-10/12 mt-2'>
                {children}
            </div>

            <footer className='w-10/12 mx-auto bg-blue-700 text-center rounded-sm text-white py-3 px-2'>
                <p>Wellcome To Your Weblog</p>
            </footer>
        </div>
    )
}

export default Layout
