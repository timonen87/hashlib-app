"use server"

import kyInstance from "@/shared/lib/ky";
import { PostsPage } from "../_domain/types";

export async function MyPostFeedActions(pageParam: string) {
    const fetchPosts = ({ pageParam }: any) =>
        kyInstance
          .get(
            "/api/posts/me",
            pageParam ? { searchParams: { cursor: pageParam } } : {},
          )
          .json<PostsPage>();

  return fetchPosts;
}
