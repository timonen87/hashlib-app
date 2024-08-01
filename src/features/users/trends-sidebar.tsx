
import { Loader2 } from "lucide-react";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

import { dbClient } from "@/shared/lib/db";
import { useAppSession } from "@/entities/user/session";
import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { Button } from "@/shared/ui/button";
import { getUserDataSelect } from "@/entities/user/_domain/types";
import UserTooltip from "@/entities/post/ui/user-tooltip";
import { UserAvatar } from "@/shared/ui/user-avatar";
import { Avatar } from "@/shared/ui/avatar";
import { ProfileAuthor } from "@/entities/post/ui/profile-author";
import { formatNumber } from "@/shared/lib/utils";
import FollowButton from "../follower/ui/follow-button";

export default function TrendsSidebar() {
  return (
    <div className="sticky top-[5.25rem] hidden h-fit w-72 flex-none space-y-5 md:block lg:w-80">
      <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
        <WhoToFollow />
        <TrendingTopics />
      </Suspense>
    </div>
  );
}

async function WhoToFollow() {
  const session = await getAppSessionStrictServer()

  if (!session.user) return null;

  const usersToFollow = await dbClient.user.findMany({
    where: {
      NOT: {
        id: session.user.id,
      },
      followers: {
        none: {
          followerId: session.user.id,
        },
      },
    },
    select: getUserDataSelect(session?.user.id),
    take: 5,
  });

  console.log("usersToFollow", usersToFollow)

  return (
    <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="text-xl font-bold">Кто подписан</div>
      {usersToFollow.map((user) => (
        <div key={user.id} className="flex items-center justify-between gap-3">
          <UserTooltip user={user}>
            <Link
              href={`/users/${user.name}`}
              className="flex items-center gap-3"
            >

              <ProfileAuthor profile={user} className="w-8 h-8" />
              <div>
                <p className="line-clamp-1 break-all font-semibold hover:underline">
                  {user.name}
                </p>
                <p className="line-clamp-1 break-all text-muted-foreground">
                  @{user.name}
                </p>
              </div>
            </Link>
          </UserTooltip>
          <FollowButton
            userId={user.id}
            initialState={{
              followers: user._count.followers,
              isFollowedByUser: user.followers.some(
                ({ followerId }) => followerId === user.id,
              ),
            }}
          />

        </div>
      ))}
    </div>
  );
}

const getTrendingTopics = unstable_cache(
  async () => {
    const result = await dbClient.$queryRaw<{ hashtag: string; count: bigint }[]>`
            SELECT LOWER(unnest(regexp_matches(content, '#[[:alnum:]_]+', 'g'))) AS hashtag, COUNT(*) AS count
            FROM posts
            GROUP BY (hashtag)
            ORDER BY count DESC, hashtag ASC
            LIMIT 5
        `;

    return result.map((row) => ({
      hashtag: row.hashtag,
      count: Number(row.count),
    }));
  },
  ["trending_topics"],
  {
    revalidate: 3 * 60 * 60,
  },
);

async function TrendingTopics() {
  const trendingTopics = await getTrendingTopics();

  return (
    <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="text-xl font-bold">Теги</div>
      {trendingTopics.map(({ hashtag, count }) => {
        const title = hashtag.split("#")[1];

        return (
          <Link key={title} href={`/hashtag/${title}`} className="block">
            <p
              className="line-clamp-1 break-all font-semibold hover:underline"
              title={hashtag}
            >
              {hashtag}
            </p>
            <p className="text-sm text-muted-foreground">
              {formatNumber(count)} {count === 1 ? "post" : "posts"}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
