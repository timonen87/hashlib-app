import { revalidatePath } from "next/cache";
import { postRepository } from "../posts.repository";
import { PostItem } from "../ui/post-item";
import { useState } from "react";
export async function PostsList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const postList = await postRepository.getPostList();

  const handleDeleteAction = async (postId: string) => {
    "use server";
    await postRepository.deletePostElement({ id: postId });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {postList.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDelete={handleDeleteAction.bind(null, post.id)}
        />
      ))}
    </div>
  );
}
