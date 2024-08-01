import Linkify from "@/entities/post/ui/linkify";
import { ProfileAuthor } from "@/entities/post/ui/profile-author";
import { UserData } from "@/entities/user/_domain/types";

interface UserProfileProps {
    user: UserData;
    userId: string;
  }

export default async function UserProfile({ user, userId }: UserProfileProps) {
    return (
      <div className="h-fit w-full space-y-5 rounded-2xl bg-card p-5 shadow-sm">
        <ProfileAuthor profile={user} />

        <div className="flex flex-wrap gap-3 sm:flex-nowrap">
          <div className="me-auto space-y-3">
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <div className="text-muted-foreground">@{user.name}</div>
            </div>
            {/* <div>Member since {formatDate(user.createdAt, "MMM d, yyyy")}</div> */}
            <div>На сайте с 24.04.24</div>
            <div className="flex items-center gap-3">
              <span>
                Посты:{" "}
                <span className="font-semibold">
                  {/* {formatNumber(user._count.posts)} */}
                  34
                </span>
              </span>
              {/* <FollowerCount userId={user.id} initialState={followerInfo} /> */}
            </div>
          </div>
          {/* {user.id === loggedInUserId ? (
              <EditProfileButton user={user} />
            ) : (
              <FollowButton userId={user.id} initialState={followerInfo} />
            )} */}
        </div>
        {user.bio && (
          <>
            <hr />
            <Linkify>
              <div className="overflow-hidden whitespace-pre-line break-words">
                {user.bio}
              </div>
            </Linkify>
          </>
        )}
      </div>
    );
  }
