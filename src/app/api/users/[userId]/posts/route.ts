import { getPostDataInclude, PostsPage } from "@/entities/post/_domain/types";
import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { dbClient } from "@/shared/lib/db";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { userId } }: { params: { userId: string } },
) {
  try {
    const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

    const pageSize = 10;

    const session = await getAppSessionStrictServer();

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const posts = await dbClient.post.findMany({
      where: { userId },
      include: getPostDataInclude(session.user.id),
      orderBy: { createdAt: "desc" },
      take: pageSize + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });

    const nextCursor = posts.length > pageSize ? posts[pageSize].id : null;

    const data: PostsPage = {
      posts: posts.slice(0, pageSize),
      nextCursor,
    };

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
