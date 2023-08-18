'use client';

import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { profileUpdated } from "@/redux/features/blogSlice/blogSlice";
import ProfileForm from "../modules/ProfileForm";
import ProfileInfo from "../modules/ProfileInfo";

function ProfilePage() {

    const [userCheck, setUerCheck] = useState({});

    const [profile, setProfile] = useState({
        name: '', lastname: '', password: ''
    })

    const dispatch = useDispatch();
    const router = useRouter();


    useEffect(() => {
        fetchProfile()
        dispatch(profileUpdated(false))
    }, [])

    const fetchProfile = async () => {
        const res = await fetch('/api/profile')
        const data = await res.json()
        if(data) setUerCheck(data.data)
    }

    const changeHandler = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const addHandler = async () => {
        const res = await fetch('/api/profile', {
            method: "POST",
            body: JSON.stringify({ data: profile }),
            headers: { "Content-Type": "application/json" }
        })

        const data = await res.json();

        if (data.status === 'success') {
            router.push('/')
            dispatch(profileUpdated(true))
        } else {
            toast.error(data.message)
        }
    }

    return (
        <div>
            <h2 className="text-blue-700 font-semibold mt-4 mb-6 text-lg">Info About your profile</h2>

            <div className="flex flex-col gap-y-2 w-fit mt-4">

                {
                    userCheck.name ? <ProfileInfo data={userCheck}/> : <ProfileForm profile={profile} changeHandler={changeHandler}/>
                }

            </div>


            {
                !userCheck.name && userCheck.lastName &&
                <button
                    onClick={addHandler}
                    className="text-white bg-blue-700 rounded px-2 py-1"
                >
                    Add
                </button>
            }

            <ToastContainer />
        </div>
    )
}

export default ProfilePage;



{/* <InputForm value={profile.name} label="Name" name='name' type='text' changeHandler={changeHandler}/>

<InputForm value={profile.lastname} label="LastName" name='lastname' type='text' changeHandler={changeHandler}/>

<InputForm value={profile.password} label="Password" name='password' type='password' changeHandler={changeHandler}/> */}
