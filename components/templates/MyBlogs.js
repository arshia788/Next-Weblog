import CardBlog from "../modules/CardBlog";

function MyBlogs({ data }) {

    console.log(data);
    return (
        <div>
            <h2 className="text-blue-700 font-medium mt-4 text-lg">MyBlogs</h2>

            <div className="grid grid-cols-12 gap-2">
                {
                    data.map(item => {
                        return (
                            <div key={item._id}
                            className="mt-4
                            xs:col-span-12
                             sm:col-span-6 
                             md:col-span-4"
                            >
                                <CardBlog data={item}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default MyBlogs