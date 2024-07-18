import { dbClient } from "@/shared/lib/db";
import { cache } from "react";
import { PostListElement } from "../_domain/types";

class PostRepository {
  getPostList = cache(
    (): Promise<PostListElement[]> => dbClient.post.findMany({
      where: {
        published: false
      },
      orderBy: {
        title: 'asc'
      },
      include: {
        author: {
         select:{
          id: true,
          email: true,
          image: true
         },
        },
        category: {
          select:{
            id:true,
            name:true,
            slug:true,
            image:true

          },
        }
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
