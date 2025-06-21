import { NextResponse } from "next/server";
import prisma from "@/utils/connect";
import { auth } from "@/utils/auth";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  //indise searchPArams we have page
  const page = parseInt(searchParams.get("page") || "1");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: (page - 1) * POST_PER_PAGE,
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

//? Create a POST
export const POST = async (req) => {
  const session = await auth();

  if (!session) {
    return new NextResponse(
      JSON.stringify({
        message: "You must be logged in to create a post",
      }),
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userId: session.user.id },
    });

    // Fixed: Return response with correct syntax
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
