
const sortBlogs=(blogs)=>{
    
    const blogObject= {};
    
    blogs.map(item=>{
        if(!blogObject[item.blogs]) blogObject.blogs=[];

        blogObject.blogs.push(item.blogs)
    })

    const newData= blogObject.blogs[0]
    return newData

}

export default sortBlogs;










