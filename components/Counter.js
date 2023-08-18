'use client';

import { useSelector } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


function Counter() {

  const blog = useSelector(store => store.blog.blogCreatedValue);
  const profileUpdate = useSelector(store => store.blog.blogProfileUpdated);
  
  useEffect(()=>{

    if(blog || profileUpdate){
      toast.success("Blog Created")
      toast.success("Profile Updated :)")
    }
    
  },[blog || profileUpdate])

  return (
    <div>
      

        <ToastContainer />
     </div>
  )
}

export default Counter