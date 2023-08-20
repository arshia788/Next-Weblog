import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import User from "@/models/User";

export async function PATCH(req) {

    const query = new URL(req.url);
    const getHref = query.href.split('/')[5];

    try {
        await connectDB()
    } catch (error) {
        return NextResponse.json({ status: 'failed', message: "Failed to connect to DB" })
    }

    const body = await req.json();
    const { data } = body;

    const session = await getServerSession(authOptions);

    if (!session) return NextResponse.json({ status: 'failed', message: "You are not logged!" })

    const user = await User.findOne({ email: session.user.email });

    if (!user) return NextResponse.json({ status: "failed", message: "User doesn't exists" })

    
    // ? Kari ke to kardi in hast ke gofti khode taraf nmitoneh like bokoneh post hay khodesh ro ama hadaf in bod ke har kar bar biad 1 bar like bokoneh. 

    // ? shak daram be idea ama hamin hast 
    const checking = user.blogs.map(item => {

        const likedBy = item.likedBy || '';

        console.log(likedBy);

        const filterLikes = likedBy.find(item => item === user.email)

        if (filterLikes) {
            return false 
        }
    })

    const a= checking.map(item=> item === false)
    console.log(a);

    if(!a) return NextResponse.json({message:"yoyo"})

    const updateLikes = await User.updateOne({ "blogs._id": getHref }, { $set: { "blogs.$.likes": data } })

    const updateLikedBy = await User.updateOne({ "blogs._id": getHref }, { $push: { "blogs.$.likedBy": user.email } })




    return NextResponse.json({ status: 'success' })

}
