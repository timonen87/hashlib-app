import { Post } from "@prisma/client";


export const createPostAbility = (post: Post) => ({
  canGetPost: (slug: string) =>
    post.slug === slug
});
