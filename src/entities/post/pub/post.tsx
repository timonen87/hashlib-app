"use client";
import { useAppSession } from "@/entities/user/session";

import { PostData } from "../_domain/types";
import UserTooltip from "../ui/user-tooltip";
import Link from "next/link";
import { Avatar } from "@/shared/ui/avatar";
import { ProfileAuthor } from "../ui/profile-author";
import { formatRelativeDate } from "@/shared/lib/utils";
import Linkify from "../ui/linkify";
import PostMoreButton from "../ui/post-more-button";

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  const session = useAppSession();

  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <UserTooltip user={post.user}>
            <Link href={`/users/${post.user.name}`}>
              <ProfileAuthor profile={post.user} />
            </Link>
          </UserTooltip>
          <div>
            <UserTooltip user={post.user}>
              <Link
                href={`/users/${post.user.name}`}
                className="block font-medium hover:underline"
              >
                {post.user.name}
              </Link>
            </UserTooltip>
            <Link
              href={`/posts/${post.id}`}
              className="block text-sm text-muted-foreground hover:underline"
              suppressHydrationWarning
            >
              {formatRelativeDate(post.createdAt)}
            </Link>
          </div>
        </div>
        {post.user.id === session.data?.user.id && (
          <PostMoreButton
            post={post}
            className="opacity-0 transition-opacity group-hover/post:opacity-100"
          />
        )}
      </div>
      <Linkify>
      <div className="text-3xl">{post.title}</div>
        {/* <div className="whitespace-pre-line break-words">{post.title}</div> */}
      </Linkify>
      {/* {!!post.attachments.length && (
          <MediaPreviews attachments={post.attachments} />
        )} */}
      <hr className="text-muted-foreground" />
      <div className="flex justify-between gap-5">
        <div className="flex items-center gap-5">
          {/* <LikeButton
              postId={post.id}
              initialState={{
                likes: post._count.likes,
                isLikedByUser: post.likes.some((like) => like.userId === user.id),
              }}
            /> */}
          {/* <CommentButton
              post={post}
              onClick={() => setShowComments(!showComments)}
            /> */}
        </div>
        {/* <BookmarkButton
            postId={post.id}
            initialState={{
              isBookmarkedByUser: post.bookmarks.some(
                (bookmark) => bookmark.userId === user.id,
              ),
            }}
          /> */}
      </div>
      {/* {showComments && <Comments post={post} />} */}
    </article>
  );
}
