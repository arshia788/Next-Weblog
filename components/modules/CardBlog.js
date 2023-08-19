'use client';

import moment from 'moment'
import Link from 'next/link';

import { FaThumbsUp } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";

function CardBlog({ data, route }) {


  const date = data.createdAt ? moment(data.createdAt).utc().format('YYYY-MM-DD') : ''


  return (
    <div className='shadow-md shadow-gray-400 p-1 rounded'>

      {
        route ?
          <button className='w-fit'>
            <Link className='w-fit border-none outline-none text-pink-700'

              href={`/edit/${data._id}`}
            ><FaPen /></Link>
          </button> : null
      }

      <h2 className='text-blue-700'> BY: <span className='text-black'>{data.author}</span> </h2>
      <div className='flex items-center justify-between my-2'>

        <h2 className='text-blue-700'> Title: <span className='text-black'>{data.title}</span> </h2>
        <p className='text-blue-700'> Date: <span className='text-black'>{date}</span> </p>

      </div>

      <div className='flex items-center justify-start'>
        <p className='text-pink-500 mr-1 text-lg'><FaThumbsUp /></p>
        <span>: {data.likes}</span>
      </div>

      <p className='text-blue-700'>Info: <span className='text-black'>{data.info}</span> </p>
    </div>
  )
}

export default CardBlog