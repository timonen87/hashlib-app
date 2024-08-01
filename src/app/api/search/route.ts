
import { getPostDataInclude, PostsPage } from "@/entities/post/_domain/types";
import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { dbClient } from "@/shared/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams.get("q") || "";
    const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

    const searchQuery = q.split(" ").join(" & ");

    const pageSize = 10;

    const { user } = await getAppSessionStrictServer()

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const posts = await dbClient.post.findMany({
      where: {
        OR: [
          {
            content: {
              search: searchQuery,
            },
          },
          {
            user: {
              name: {
                search: searchQuery,
              },
            },
          },
          {
            user: {
              name: {
                search: searchQuery,
              },
            },
          },
        ],
      },
      include: getPostDataInclude(user.id),
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
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
