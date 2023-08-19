import React from 'react'

function ProfileInfo({data}) {

    return (
        <div>

            {data.name ? 
            <p className='text-blue-700'>Name: <span className='text-black'>{data.name}</span></p>
            :
            null
        }
        
        {data.lastname ? 
            <p className='text-blue-700'>LastName: <span className='text-black'>{data.lastname}</span></p>
            :
            null
        }
            <p className='text-blue-700'>Email: <span className='text-black'>{data.email}</span></p>
            
        </div>
    )
}

export default ProfileInfo