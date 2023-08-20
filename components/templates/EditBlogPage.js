'use client'

import { useState } from "react";
import InputForm from "../modules/InputForm";

import { useSelector, useDispatch } from "react-redux";
import { blogUpdated } from "@/redux/features/blogSlice/blogSlice";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditBlogPage({ id }) {

    const [blogUpdate, setBlogUpdate] = useState({
        title: '',
        info: ''
    })

    const blogUpdateRedux= useSelector(store=> store.blog.blogUpdate)
    const dispatch= useDispatch();
    const router= useRouter()

    const updateHandler = async () => {
        const res = await fetch(`/api/edit/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ data:blogUpdate }),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        if(data.status === 'success') {
            router.push('/')
            dispatch(blogUpdated(true))
        }else{
            toast.error(data.message)
        }
    }

    const changeHandler = (e) => {
        setBlogUpdate({ ...blogUpdate, [e.target.name]: e.target.value })
    }

    return (
        <div>

            <div className="my-4">

                <InputForm
                    name='title'
                    label="Title" value={blogUpdate.title} type="text"
                    changeHandler={changeHandler} />

                <InputForm
                    name='info'
                    label="Info" value={blogUpdate.info} type="text"
                    changeHandler={changeHandler} />
            </div>

            <button
            onClick={updateHandler}
                className="bg-blue-700  p-1 rounded text-white"
            >Update</button>

            <ToastContainer />
        </div>
    )
}
