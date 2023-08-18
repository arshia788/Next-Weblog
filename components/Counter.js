'use client';

import { useDispatch, useSelector } from "react-redux";
import blogSlice from "@/redux/features/blogSlice/blogSlice";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

function Counter() {

  const blog = useSelector(store => store.blog.blogCreatedValue);
  const profileUpdated = useSelector(store => store.blog.blogProfileUpdated);
  
  useEffect(()=>{

    if(blog || profileUpdated){
      toast.success("Blog Created")
      toast.success("Profile updated")
    }
    
  },[blog])

  return (
    <div>
      

        <ToastContainer />
     </div>
  )
}

export default Counter