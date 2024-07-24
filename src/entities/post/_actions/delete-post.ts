"use server";

import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { dbClient } from "@/shared/lib/db";
import { postRepository } from "../_repositories/post";
import { getPostDataInclude } from "../_domain/types";

export async function deletePost(id: string) {
  const session = await getAppSessionStrictServer();

  if (!session) throw new Error("Unauthorized");

  const post = await dbClient.post.findUnique({
    where: { id },
  });

  if (!post) throw new Error("Post not found");

  if (post.userId !== session.user.id) throw new Error("Unauthorized");

  const deletePost = await dbClient.post.delete({
      where: {id},
      include: getPostDataInclude(session.user.id),

  })

//   const deletePost = await postRepository.deletePost({id});

  return deletePost;
}
