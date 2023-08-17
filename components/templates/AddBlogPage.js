'use client'

import React, { useEffect, useState } from 'react';
import InputButton from '../layout/InputButton';
import { useRouter } from 'next/navigation';

function AddBlogPage() {

    
    const [blog, setBlog] = useState({
        title: '',
        info: '',
        author: '',
        date: '',
        likes: 0,
        date: ''
    })

    const router= useRouter();

    useEffect(()=>{
        a()
    },[])
    
    const a= async()=>{
        const res= await fetch('/api/addblog',{
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json()
        // if(data.status === 'failed') router.push('/signin')
    }
    


    
    const changeHandler = (e) => {
        setBlog({...blog, [e.target.name]:e.target.value})
    }

    return (
        <div>
            <h2 className='my-4 font-semibold text-blue-700 text-center text-lg'>Create Your Own Blog</h2>

            <div className='border border-blue-700 rounded p-4 mt-4'>

                <InputButton value={blog.title} label="Title" name='title' changeHandler={changeHandler}
                type='text' />


                <InputButton value={blog.author} label="Author" name='author' changeHandler={changeHandler}
                type='text' />

                <InputButton value={blog.date}  label="Date" name='date' changeHandler={changeHandler}
                type='date' />                
            </div>

            <div className='border border-blue-700 rounded p-4 mt-4 flex flex-col'>
                <label className='mb-2 text-gray-400'>Info</label>
                <textarea 
                className='shadow-sm shadow-gray-500 rounded-sm outline-none p-1
                focus:border focus:border-blue-700 resize-none'
                value={blog.info} onChange={changeHandler} name='info'>

                </textarea>
            </div>
            
            <button 
            className='bg-blue-700 rounded text-white px-2 py-1 mt-4'
            >Add-Blog</button>
        </div>
    )
}

export default AddBlogPage