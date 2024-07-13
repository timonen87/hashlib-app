
import { useQueryClient } from "@tanstack/react-query";

const baseKey = "post";

export const getPostQuery = (postId: PostEntity) => ({
  queryKey: [baseKey, "getPostById", postId],
  queryFn: () => getPostAction({ postId }),
});

export const useInvalidatePost = () => {
  const queryClient = useQueryClient();

  return (postId: PostEntity) =>
    queryClient.invalidateQueries({
      queryKey: [baseKey, "getPostById", userId],
    });
};