import { NextResponse } from "next/server";
import prisma from '@/utils/connect'

export const GET =async(req)=>{
    const {searchParams} = new URL(req.url)

    //indise searchPArams we have page
    const page = searchParams.get("page")

    const POST_PER_PAGE = 2;
    try {
        //finding posts from prisma
        const posts = await prisma.post.findMany(
            // {
            //     take:POST_PER_PAGE,
            //     skip:POST_PER_PAGE * (page-1)

            // }
        )
        //returning posts
        return new NextResponse(JSON.stringify(posts,{status:200}))
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({message:"Something went wrong"},{status:500}))
    }
}