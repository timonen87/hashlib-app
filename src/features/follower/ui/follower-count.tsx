"use client";

import { formatNumber } from "@/shared/lib/utils";
import useFollowerInfo from "../_vm/use-follower-info";
import { FollowerInfo } from "../models/types";



interface FollowerCountProps {
  userId: string;
  initialState: FollowerInfo;
}

export default function FollowerCount({
  userId,
  initialState,
}: FollowerCountProps) {
  const { data } = useFollowerInfo(userId, initialState);

  return (
    <span>
      Followers:{" "}
      <span className="font-semibold">{formatNumber(data.followers)}</span>
    </span>
  );
}
