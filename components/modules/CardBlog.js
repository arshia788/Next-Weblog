import moment from 'moment'
import React from 'react'

function CardBlog({ data }) {

  const date = data.createdAt ? moment(data.createdAt).utc().format('YYYY-MM-DD') : ''

  return (
    <div className='shadow-md shadow-gray-400 p-1 rounded'>

      <div className='flex items-center justify-between my-2'>
        <h2 className='text-blue-700'> Title: <span className='text-black'>{data.title}</span> </h2>
        <p className='text-blue-700'> Date: <span className='text-black'>{date}</span> </p>
      </div>
      <p className='text-blue-700'>Info: <span className='text-black'>{data.info}</span> </p>
    </div>
  )
}

export default CardBlog