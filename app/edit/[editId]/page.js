import EditBlogPage from "@/components/templates/EditBlogPage";

export default function page({params:{editId}}) {
  

  return (
    <div>
      <h2 className="text-lg font-semibold mt-4 text-blue-700 w-fit border-b-2 border-b-pink-500">Edit Your Blog!</h2>
      <EditBlogPage id={editId}/>
    </div>
  )
}
