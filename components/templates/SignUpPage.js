'use client'

import { useState } from "react"

function SignUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPasswrod] = useState('');

    const signUpHandler=async()=>{
        const res= await fetch('/api/auth/signup',{
            method:"POST",
            body:JSON.stringify({email, password}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json()
        console.log(data);
    }

    return (
        <div className="flex justify-center items-center ">

            <div className="flex flex-col h-72 gap-y-4 shadow-md shadow-gray-400 mt-12 p-3 rounded">
                <h2>SignUp-Form</h2>

                <div className="flex flex-col gap-y-2 mt-3">
                    <label htmlFor="email" className="text-zinc-500">Email</label>
                    <input 
                    className="rounded outline-none border border-blue-700 p-1 "
                    onChange={e=>setEmail(e.target.value)}
                    id="email" value={email} placeholder="Email..."/>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="password" className="text-zinc-500">Password</label>
                    <input
                    type="password" 
                    className="rounded outline-none border border-blue-700 p-1 "
                    onChange={e=>setPasswrod(e.target.value)}
                    id="password" value={password} placeholder="Password..."/>
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