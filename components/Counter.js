'use client';

import { useDispatch, useSelector } from "react-redux";
import blogSlice from "@/redux/features/blogSlice/blogSlice";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Counter() {

  const blog = useSelector(store => store.blog.blogCreatedValue)
  console.log(blog);

  if(blog){
    toast.success("Blog Created")
  }
  return (
    <div>
      

        <ToastContainer />
     </div>
  )
}

export default Counter