import { NextResponse } from "next/server";
import prisma from '@/utils/connect'
export const GET = async()=>{
    try {
        
            //finding the category using find method
            const categories = await prisma.category.findMany() 
            //returning the category
            return new NextResponse(JSON.stringify(categories,{status:200}))

    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({message:"Something went wrong"},{status:500}))
    }
}