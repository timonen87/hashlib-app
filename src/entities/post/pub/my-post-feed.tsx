"use client";

import kyInstance from "@/shared/lib/ky";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PostsPage } from "../_domain/types";
import InfiniteScrollContainer from "../_vm/infifinty-scroll-container";
import Post from "./post";
import { Loader2 } from "lucide-react";
import PostsLoadingSkeleton from "../ui/post-loading-skeleton";

export default function MyPostFeed() {


  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["post-feed", "me"],
    queryFn: async ({ pageParam }) =>
      await kyInstance
        .get(
          "/api/posts/me",
          pageParam ? { searchParams: { cursor: pageParam } } : {},
        )
        .json<PostsPage>(),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  // } = useInfiniteQuery({
  //   queryKey: ["post-feed", "me"],
  //   queryFn: ({ pageParam }) => fetchProjects(pageParam),
  //   initialPageParam: null as string | null,
  //   getNextPageParam: (lastPage) => lastPage.nextCursor,
  // });

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  if (status === "pending") {
    return <PostsLoadingSkeleton />;
  }

  if (status === "success" && !posts.length && !hasNextPage) {
    return (
      <p className="text-center text-muted-foreground">
        Нет публикаций, пока ....
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="text-center text-destructive">Ошибка загрузки публикаций</p>
    );
  }

  return (
    <InfiniteScrollContainer
      className="space-y-5"
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {isFetchingNextPage && <Loader2 className="mx-auto my-3 animate-spin" />}
    </InfiniteScrollContainer>
  );
}
