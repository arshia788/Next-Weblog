'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPasswrod] = useState('');
    const [type, setType]= useState('password')
    const router= useRouter()

    
    
    const signUpHandler=async()=>{
        const res= await fetch('/api/auth/signup',{
            method:"POST",
            body:JSON.stringify({email, password}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json()
        if(data.status === 'success') router.replace('/signin')
    }

    const clickHandler=()=>{
        if(type === 'password'){
            setType('text')
        }else{
            setType('password')
        }
    }

    return (
        <div className="flex justify-center items-center ">

            <div className="flex flex-col h-80 gap-y-5 shadow-md shadow-gray-400
             mt-12 p-3 rounded">
                <h2 className="text-center text-blue-700 font-semibold">SignUp-Form</h2>

                <div className="flex flex-col gap-y-2 mt-3 ">
                    <label htmlFor="email" className="text-blue-400">Email</label>
                    <input 
                    className="rounded outline-none border border-blue-700 p-1 "
                    onChange={e=>setEmail(e.target.value)}
                    id="email" value={email} placeholder="Email..."/>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="password" className="text-blue-400">Password</label>
                    
                    <div className="relative flex border-blue-700 rounded border px-1 justify-between items-center">
                    <input

                    type={type}
                    value={password}
                    className=" rounded outline-none  p-1 "
                    onChange={e=>setPasswrod(e.target.value)}
                    id="password"  placeholder="Password..."/>
                    
                    {
                        type === 'text' ?
                        <FaEye onClick={clickHandler} className="cursor-pointer"/>
                        
                        :
                        <FaEyeSlash onClick={clickHandler} className="cursor-pointer"/>
                    } 

                    </div>
                </div>

            <button
            onClick={signUpHandler}
            className="bg-blue-700 rounded text-white py-1 mt-2"
            >SignUp</button>

            </div>

        </div>
    )
}

export default SignUpPage