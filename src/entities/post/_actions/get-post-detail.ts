"use server";
import { z } from "zod";


import { PostData } from "../_domain/types";
// import { getPostUseCase } from "../_use_cases/get-post-detail";
import { postDetailSchema } from "../_domain/schema";
import { postRepository } from "../_repositories/post";

const propsSchema = z.object({
  slug: z.string(),
});

const resultSchema = z.object({
  post: postDetailSchema,
});

export const getPostAction = async (props: z.infer<typeof propsSchema>) => {
//   const post = await getPostUseCase.exec({
//     slug: props.slug,
//   });

  const post = await postRepository.getPostBySlug(props.slug)

  console.log(post)

//   return resultSchema.parseAsync({
//     post: post,
//   });
  return post
};
