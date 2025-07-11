import { NextResponse } from "next/server";
import prisma from '@/utils/connect'
import { auth } from "@/utils/auth";


//? Get all comments
export const GET = async(req )=>{

    const {searchParams} = new URL(req.url)
    const postSlug = searchParams.get("postSlug")

    try {
        const comments = await prisma.comment.findMany({
            where:{
                ...(postSlug && {postSlug})
            },
            include:{user: true},
        });
        return new NextResponse(JSON.stringify(comments, { status: 200 }));
      } catch (err) {
        console.log(err);
        return new NextResponse(
          JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
      }
}

//? Creating the comment
export const POST= async(req)=>{
  const session = await auth();

  if(!session){
    return new NextResponse(JSON.stringify({message:"SLogged in to comment"}, {status:401}))
  }
  try {
    const body = await req.json()
    const comment = await prisma.comment.create({
      data:{...body, userId: session.user.id}
    })

    return new NextResponse(JSON.stringify(comment, {status:200}))
  } catch (error) {
    console.log(error);
    
    return new NextResponse(
      JSON.stringify({message:"something went wrong"} , {status:500})
    )
  }
}