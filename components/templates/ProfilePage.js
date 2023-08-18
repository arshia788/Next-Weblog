'use client';

import { useEffect, useState } from "react";
import InputForm from "../modules/InputForm";
import {useSelector, useDispatch} from 'react-redux'
import { profileUpdated } from "@/redux/features/blogSlice/blogSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

function ProfilePage({session}) {


    const [profile, setProfile]= useState({
        name:'', lastname:'', password:''
    })

    const blogUpdated= useSelector(store=> store.blog.blogProfileUpdated)
    const dispatch= useDispatch();
    const router= useRouter;
    
    useEffect(()=>{
        dispatch(profileUpdated(false))
    },[blogUpdated])

    const changeHandler=(e)=>{
        setProfile({...profile, [e.target.name]:e.target.value})
    }

    const addHandler=async()=>{
        const res= await fetch('/api/profile',{
            method:"POST",
            body:JSON.stringify({data:profile}),
            headers:{"Content-Type":"application/json"}
        })

        const data= await res.json();

        if(data.status === 'success'){
            router.push('/')
        }else{
            toast.error(data.message)
        }
    }
    
    return (
        <div>
            <h2 className="text-blue-700 font-semibold mt-4 mb-6 text-lg">Add Info To your profile</h2>

            <div className="flex flex-col gap-y-2 w-fit mt-4">

                <InputForm value={profile.name} label="Name" name='name' type='text' changeHandler={changeHandler}/>

                <InputForm value={profile.lastname} label="LastName" name='lastname' type='text' changeHandler={changeHandler}/>

                <InputForm value={profile.password} label="Password" name='password' type='password' changeHandler={changeHandler}/>

            </div>

            <button
            onClick={addHandler}
            className="text-white bg-blue-700 rounded px-2 py-1"
            >
                Add
            </button>

            <ToastContainer />
        </div>
    )
}

export default ProfilePage