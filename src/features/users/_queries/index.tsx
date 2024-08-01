import { PostsPage } from "@/entities/post/_domain/types";
import { UserId } from "@/entities/user/user";
import kyInstance from "@/shared/lib/ky";



export const getPostFeed = (userId: UserId) => ({
    queryKey: ["post-feed", "user-posts", userId],
    queryFn: ({ pageParam }:any) =>
      kyInstance
        .get(
          `/api/users/${userId}/posts`,
          pageParam ? { searchParams: { cursor: pageParam } } : {},
        )
        .json<PostsPage>()
  });
