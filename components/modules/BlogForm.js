"use client";

import { useEffect, useState } from "react";
import InputButton from '../modules/InputButton';
import { useDispatch, useSelector } from "react-redux";

import { created } from "@/redux/features/blogSlice/blogSlice";
import { useRouter } from "next/navigation";

function BlogForm() {

    const [blog, setBlog] = useState({
        title: '',
        info: '',
        author: '',
        date: '',
        likes: 0,
        date: ''
    })

    const dispatch= useDispatch();
    const router=useRouter();

    const changeHandler = (e) => {
        setBlog({...blog, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        dispatch(created(false))
    },[])

    const addBlogHandler=async()=>{
        const res= await fetch('/api/addblog',{
            method:"POST",
            body:JSON.stringify({data:blog}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json()

        if(data.status === 'success') {
            dispatch(created(true))
            router.push('/')
        }

    }


    return (
        <div>
            <div className='border border-blue-700 rounded p-4 mt-4'>

                <InputButton value={blog.title} label="Title" name='title' changeHandler={changeHandler}
                    type='text' />


                <InputButton value={blog.author} label="Author" name='author' changeHandler={changeHandler}
                    type='text' />

                <InputButton value={blog.date} label="Date" name='date' changeHandler={changeHandler}
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
            onClick={addBlogHandler}
            className='bg-blue-700 rounded text-white px-2 py-1 mt-4'
            >Add-Blog</button>
        </div>
    )
}

export default BlogForm