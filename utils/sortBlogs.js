
const sortBlogs=(users)=>{
    
    const blogObject= {};
    blogObject.blogs=[]
    
    users.map(item=>{

        // if(!blogObject[item.blogs]) blogObject.blogs=[];

        blogObject.blogs.push(item.blogs)
    })



    const lastData=[];

    const newData= blogObject.blogs.map(item=>{
        const last = item.map(blog=> lastData.push(blog))
    })

    

    return lastData

}

export default sortBlogs;
