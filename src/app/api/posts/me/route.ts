import { getPostDataInclude, PostsPage } from "@/entities/post/_domain/types";
import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { useAppSession } from "@/entities/user/use-app-session";

import { dbClient } from "@/shared/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

    const pageSize = 10;

    const session = await getAppSessionStrictServer();

    const user = session.user

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const posts = await dbClient.post.findMany({
      include: getPostDataInclude(user.id),
      orderBy: { createdAt: "desc" },
      take: pageSize + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });



    console.log(posts)

    const nextCursor = posts.length > pageSize ? posts[pageSize].id : null;

    const data: PostsPage = {
      posts: posts.slice(0, pageSize),
      nextCursor,
    };

    return Response.json(data);

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
