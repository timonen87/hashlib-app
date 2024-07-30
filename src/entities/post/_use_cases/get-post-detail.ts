// import { AuthorizatoinError } from "@/shared/lib/errors";
// import { postRepository } from "../_repositories/post";
// import { PostData } from "../post";
// import { createPostAbility } from "../_actions/ability";

// type GetPost = {
//   post: PostData;
// };

// export class GetPostUseCase {
//   async exec({ post }: GetPost): Promise<PostData> {
//     const postAbility = createPostAbility(post.slug);

//     if (!postAbility.canGetPost(post.slug)) {
//       throw new AuthorizatoinError();
//     }
//     return await postRepository.getPostBySlug(post.slug);
//   }
// }

// export const getPostUseCase = new GetPostUseCase();
