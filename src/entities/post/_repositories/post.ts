import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import { getPostDataInclude, PostData, PostListElement } from "../_domain/types";

class PostRepository {
  // getPostList = cache(
  //   (): Promise<PostData[]> => dbClient.post.findMany({
  //     where: {
  //       published: false
  //     },
  //     orderBy: {
  //       title: 'asc'
  //     },
  //     include: {
  //       author: {
  //        select:{
  //         id: true,
  //         email: true,
  //         image: true
  //        },
  //       },
  //       category: {
  //         select:{
  //           id:true,
  //           name:true,
  //           slug:true,
  //           image:true

  //         },
  //       }
  //     }
  //   }),
  // );

  // getPostList = cache(
  //   (): Promise<PostData[]> => dbClient.post.findMany(),
  // );


  // createPostElement = (command: CreatePostListElementCommand) => {
  //   return dbClient.post.create({
  //     data: command,
  //   });
  // };

  deletePost = (command: PostData) => {
    return dbClient.post.delete({
      where: {
        id: command.id,
      },
      include: getPostDataInclude(command.id),
    });
  };
}
export const postRepository = new PostRepository();
