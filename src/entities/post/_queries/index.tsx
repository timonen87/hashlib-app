import { useQueryClient } from "@tanstack/react-query";

import { LinkWithTooltip } from "../_actions/link-with-tooltip";
import { MyPostFeedActions } from "../_actions/post-feed";
import kyInstance from "@/shared/lib/ky";
import { PostsPage } from "../_domain/types";

// const baseKey = "post";

// export const getPostQuery = (slug: string) => ({
//   queryKey: [baseKey, "getPostBySlug", slug],
//   queryFn: () => getPostAction({ slug }),
// });

export const getLinkWithTooltip = (username: string) => ({
  queryKey: ["user-data", username],
  queryFn: () => LinkWithTooltip(username),
});


const fetchProjects = ({ pageParam }: any) =>
    kyInstance
      .get(
        "/api/posts/me",
        pageParam ? { searchParams: { cursor: pageParam } } : {},
      )
      .json<PostsPage>();



export const getPostFeed = (pageParam: string) => ({
    queryKey: ["post-feed", "me"],
    queryFn: fetchProjects,
  });





// export const useInvalidatePost = () => {
//   const queryClient = useQueryClient();

//   return (postId: PostEntity) =>
//     queryClient.invalidateQueries({
//       queryKey: [baseKey, "getPostById", userId],
//     });
// };
