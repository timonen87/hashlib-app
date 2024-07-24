"use client";

import { UserData } from "@/entities/user/_domain/types";
import { useAppSession } from "@/entities/user/session";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";
import { UserAvatar } from "@/shared/ui/user-avatar";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { ProfileAuthor } from "./profile-author";
import { Button } from "@/shared/ui/button";

interface UserTooltipProps extends PropsWithChildren {
  user: UserData;
}

export default function UserTooltip({ children, user }: UserTooltipProps) {
  const session = useAppSession();

  const currentUser = session?.data?.user;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <div className="flex max-w-80 flex-col gap-3 break-words px-1 py-2.5 md:min-w-52">
            <div className="flex items-center justify-between gap-2">
              <Link href={`/users/${currentUser?.name}`}>
                <ProfileAuthor profile={user} className="w-8 h-8" />
              </Link>
              {/* {loggedInUser.id !== user.id && (
                  <FollowButton userId={user.id} initialState={followerState} />
                )} */}
              {currentUser?.id !== user.id && (
                <Button variant="default" onClick={() => {}}>
                  Follow
                </Button>
              )}
            </div>
            <div>
              <Link href={`/users/${user.name}`}>
                <div className="text-lg font-semibold hover:underline">
                  {user.name}
                </div>
                <div className="text-muted-foreground">@{user.name}</div>
              </Link>
            </div>
            {currentUser?.bio && (
              // <Linkify>
              <div className="line-clamp-4 whitespace-pre-line">{user.bio}</div>
              // </Linkify>
            )}
            {/* <FollowerCount userId={user.id} initialState={followerState} /> */}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
