"use server";
import { revalidatePath } from "next/cache";
import { postRepository } from "./posts.repository";

export const createPostAction = async (
  command: CreatePostListElementCommand,
  revalidatePagePath: string,
) => {
  await postRepository.createPostElement(command);
  revalidatePath(revalidatePagePath);
};
