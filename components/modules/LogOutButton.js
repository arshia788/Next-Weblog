'use client';

import Link from "next/link";

import { signOut } from "next-auth/react";
import {FiLogOut} from 'react-icons/fi';
import { FaSignInAlt } from "react-icons/fa";
import { redirect } from "next/navigation";





async function LogOutButton({ session }) {


    const logOut=()=>{
        signOut()
        redirect('/')
    }

    return (
        <div>
            {
                session ?
                    <div
                        onClick={logOut}
                        className="flex items-center border border-zinc-300 rounded px-1 cursor-pointer">
                        <FiLogOut />
                        <p>Log-Out</p>
                    </div>
                    :
                    <div className="flex items-center gap-x-1 border border-zinc-300 rounded px-1 cursor-pointer">
                        <FaSignInAlt />
                        <p>
                            <Link href='/signin'>
                                Sign-In
                            </Link>
                        </p>
                    </div>

            }
        </div>
    )
}

export default LogOutButton