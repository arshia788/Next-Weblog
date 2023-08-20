'use client';

import { useEffect, useState } from "react";
import CardBlog from "../modules/CardBlog";

function MyBlogs(){

    const [data, setData]= useState([]);
    const [myRoute, setMyRoute]= useState(true);
    console.log(data);    
    
    useEffect(()=>{
        fetchUserBlogs()
    },[])

    const fetchUserBlogs=async()=>{
        const res= await fetch('/api/myblogs')
        const data= await res.json()
        if(data.status === 'success') setData(data.data)
    }

    return (
        <div>
            <h2 className="text-blue-700 font-medium mt-4 text-lg">MyBlogs</h2>

            <div className="grid grid-cols-12 gap-2">

                {
                    data.map(item => {
                        return (
                            <div key={item._id}
                            className="mt-4
                            xs:col-span-12
                             sm:col-span-6 
                             md:col-span-4"
                            >
                                <CardBlog route={myRoute} Data={item}/>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default MyBlogs;