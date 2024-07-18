import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import { PostListElement } from "../_domain/types";

class PostRepository {
  getPostList = cache(
    (): Promise<PostListElement[]> => dbClient.post.findMany({
      include: {
        author: true,
        category: true
      }
    }),
  );

//   createPostElement = (command: CreatePostListElementCommand) => {
//     return dbClient.post.create({
//       data: command,
//     });
//   };

//   deletePostElement = (command: DeletePostListElementCommand) => {
//     return dbClient.post.delete({
//       where: {
//         id: command.id,
//       },
//     });
//   };
}
export const postRepository = new PostRepository();
