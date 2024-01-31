import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

class PostRepository {
  getPostList = cache(
    (): Promise<PostListElement[]> => dbClient.post.findMany(),
  );

  createPostElement = (command: CreatePostListElementCommand) => {
    return dbClient.post.create({
      data: command,
    });
  };

  deletePostElement = (command: DeletePostListElementCommand) => {
    return dbClient.post.delete({
      where: {
        id: command.id,
      },
    });
  };
}
export const postRepository = new PostRepository();
