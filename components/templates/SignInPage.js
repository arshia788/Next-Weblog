'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { signIn } from "next-auth/react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

function SignIpPage() {

    const [email, setEmail] = useState('');
    const [password, setPasswrod] = useState('');
    const [type, setType]= useState('password');
    const [check, setCheck]= useState(false);
    const router= useRouter()

    
    
    const signInHandler=async()=>{

        const res= await signIn('credentials',{
          email, password, redirect:false
        })


        if(!res.error){
          router.refresh('/')
        }else{
          setCheck(true)
          toast.error(res.error)
        }

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

            <div className="flex flex-col h-82 gap-y-5 shadow-md shadow-gray-400
             mt-12 p-3 rounded">
                <h2 className="text-center text-blue-700 font-semibold">SignIn-Form</h2>

                <div className="flex flex-col gap-y-2 mt-3 ">

                    <label htmlFor="email" className={
                      `${check ? 'text-red-700':'text-blue-700'}`
                    }>Email</label>

                    <input 
                    className= {`${check ?
                      'relative flex border-red-700 rounded border px-1 justify-between items-center p-1'
                      : `relative flex border-blue-700 rounded border px-1 justify-between items-center p-1`} `}
                    onChange={e=>setEmail(e.target.value)}
                    id="email" value={email} placeholder="Email..."/>
                </div>

                <div className="flex flex-col gap-y-2">
                  
                  <label htmlFor="email" className={
                      `${check ? 'text-red-700':'text-blue-700'}`
                    }>Password</label>
                    
                    <div className= {`${check ?
                    'relative flex border-red-700 rounded border px-1 justify-between items-center'
                    : `relative flex border-blue-700 rounded border px-1 justify-between items-center`} `} >
                    <input

                    type={type}
                    value={password}
                    className= {`rounded outline-none  p-1`}
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
            
            <p className="text-sm">Don't have An Account ? <Link
            className="text-blue-700"
            href='/signup'>Create Acount</Link> </p>

            <button
            onClick={signInHandler}
            className="bg-blue-700 rounded text-white py-1 mt-0.5"
            >SignIn</button>

            </div>
          
          <ToastContainer />
        </div>
    )
}

export default SignIpPage