
import { useQuery } from "@tanstack/react-query";
import { FollowerInfo } from "../models/types";
import kyInstance from "@/shared/lib/ky";

export default function useFollowerInfo(
  userId: string,
  initialState: FollowerInfo,
) {
  const query = useQuery({
    queryKey: ["follower-info", userId],
    queryFn: () =>
      kyInstance.get(`/api/users/${userId}/followers`).json<FollowerInfo>(),
    initialData: initialState,
    staleTime: 0,
  });

  return query;
}
