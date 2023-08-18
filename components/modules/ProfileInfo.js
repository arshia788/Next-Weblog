import React from 'react'

function ProfileInfo({data}) {

    return (
        <div>
            <p className='text-blue-700'>Name: <span className='text-black'>{data.name}</span></p>
            <p className='text-blue-700'>LastName: <span className='text-black'>{data.lastname}</span></p>
            <p className='text-blue-700'>Email: <span className='text-black'>{data.email}</span></p>
            
        </div>
    )
}

export default ProfileInfo