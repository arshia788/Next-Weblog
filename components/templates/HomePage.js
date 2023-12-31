'use client';

import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";
import CardBlog from "../modules/CardBlog";

import { created } from "@/redux/features/blogSlice/blogSlice";
import { profileUpdated, blogUpdated } from "@/redux/features/blogSlice/blogSlice";

function HomePage() {

  const [blogs, setBlogs] = useState([]);


  const blog = useSelector(store => store.blog.blogCreatedValue);
  const profileUpdate = useSelector(store => store.blog.blogProfileUpdated);
  const blogUpdate = useSelector(store => store.blog.blogUpdate);

  const dispatch=useDispatch();

  useEffect(() => {

    dispatch(created(false))
    dispatch(profileUpdated(false))
    dispatch(blogUpdated(false))
    
    fetchBlogs()

    if(blog){
      toast.success("Blog Created")
    }else if(profileUpdate){
      toast.success("Profile Updated :)")
    }else if(blogUpdate){
      toast.success("Blog Updated :)")
    }
    

  }, [])

  const fetchBlogs = async () => {
    const res = await fetch('/api/blogs')
    const data = await res.json()
    if (data) setBlogs(data.data)
  }

  
  return (
    <div>
      <h2 className="my-4 text-center font-medium">Wellcome To Your Blog.</h2>

      <div className="grid grid-cols-12 gap-4">

        {blogs.map(item => {
          return (
            <div key={item._id} className="xs:col-span-12 sm:col-span-6 md:col-span-4">
              <CardBlog fetchBlogs={fetchBlogs} Data={item} />
            </div>
          )

        })}

      </div>
      <ToastContainer />
    </div>
  )
}

export default HomePage