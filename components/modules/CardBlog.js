'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment'

import { FaThumbsUp } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";

function CardBlog({ Data, route , fetchBlogs}) {

  const {likes}= Data;

  const date = Data.createdAt ? moment(Data.createdAt).utc().format('YYYY-MM-DD') : null;

  const router = useRouter();

  // ? baray in omadi inja id ro az tag p gerefti chon vaghti data._id midadi componentesh hanooz bala nayomadeh bod va kar nmikard. 
  // * pas omadi on data ro be onvan props behesh dadi. 

  const likeBlog = async (id) => {
      const res = await fetch(`/api/blogs/${id}`,{
        method:"PATCH",
        body:JSON.stringify({data:likes+1}),
        headers:{"Content-Type":"application/json"}
      })

      const info = await res.json()
      console.log(info);
      
      if (info.status === 'success'){
        fetchBlogs()
      }else{
        toast.error(info.message)
      }
  }

  return (
    <div className='shadow-md shadow-gray-400 p-1 rounded'>

      {
        route ?
          <button className='w-fit'>
            <Link className='w-fit border-none outline-none text-pink-700'

              href={`/edit/${Data._id}`}
            ><FaPen /></Link>
          </button> : null
      }

      <div className='flex items-center justify-between'>
        <h2 className='text-blue-700'> BY: <span className='text-black'>{Data.author}</span> </h2>

      </div>


      <div className='flex items-center justify-between my-2'>
        <h2 className='text-blue-700'> Title: <span className='text-black'>{Data.title}</span> </h2>
        <p className='text-blue-700'> Date: <span className='text-black'>{date}</span> </p>
      </div>

      <div className='flex items-center justify-start'>

        <p className='text-pink-500 mr-1 text-lg cursor-pointer'
          onClick={() => likeBlog(Data._id)}
        ><FaThumbsUp /></p>

        <span>: {likes}</span>

      </div>

      <p className='text-blue-700'>Info: <span className='text-black'>{Data.info}</span> </p>

      <ToastContainer />
    </div>
  )
}

export default CardBlog