
import { useQueryClient } from "@tanstack/react-query";
import { getPostAction } from "../_actions/get-post-detail";
import { PostData } from "../post";

const baseKey = "post";

export const getPostQuery = (slug: string) => ({
  queryKey: [baseKey, "getPostBySlug", slug],
  queryFn: () => getPostAction({ slug }),
});



// export const useInvalidatePost = () => {
//   const queryClient = useQueryClient();

//   return (postId: PostEntity) =>
//     queryClient.invalidateQueries({
//       queryKey: [baseKey, "getPostById", userId],
//     });
// };
