

import { PostsPage } from "@/entities/post/_domain/types";
import { getUserDataSelect, UserData, UserId } from "@/entities/user/_domain/types";
import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { dbClient } from "@/shared/lib/db";
import kyInstance from "@/shared/lib/ky";

export async function PostFeed(userId:UserId, pageParam: string) {
    return await kyInstance
    .get(
      `/api/users/${userId}/posts`,
      pageParam ? { searchParams: { cursor: pageParam } } : {},
    )
    .json<PostsPage>(),

}
