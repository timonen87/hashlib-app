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
import { getProfileDisplayName } from "@/entities/user/profile";

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  const session = useAppSession();

  return (
    <>
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
                href={`/posts/${post.slug}`}
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
          <Link href={`/posts/${post.slug}`}>
            <div className="text-3xl">{post.title}</div>
          </Link>
          <div className="whitespace-pre-line break-words">{post.title}</div>
        </Linkify>
        {/* {!!post.attachments.length && (
          <MediaPreviews attachments={post.attachments} />
        )} */}
        <hr className="text-muted-foreground" />
        <div className="flex justify-between gap-5">
          <div className="flex items-center gap-5">
            <Link href={"/"}>Like</Link>
            <Link href={"/"}>Comments</Link>
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
          <Link href={"/"}>В закладки</Link>
        </div>
        {/* {showComments && <Comments post={post} />} */}
      </article>
      <div className="p-6 flex flex-col relative md:px-5 w-full mt-4 py-4 bg-white dark:bg-gray-700 shadow rounded-lg">
        <div className="hidden flex items-center justify-center loading-status bg-white dark:bg-dark-background opacity-75 w-full absolute border-r">
          <div className="w-4 h-4 border-l-2 border-gray-500 rounded-full animate-spin"></div>
        </div>
        <div className="article-short-user-data flex flex-col sm:flex-row">
          <div className="flex flex-row gap-2">
            <UserTooltip user={post.user}>
              <Link href={`/users/${post.user.name}`}>
                <ProfileAuthor profile={post.user} className="w-8 h-8" />
              </Link>
            </UserTooltip>

            <div className="pr-1">
              <Link
                className="hover:underline"
                href={`/profile/${post.user.id}`}
              >
                {post.user ? getProfileDisplayName(post.user) : ""}
              </Link>
            </div>
          </div>
          <div className="pr-1">
            <div className="pr-1">
              в{" "}
              <Link className="hover:underline" href={`/post/${post.slug}`}>
                # python
              </Link>
            </div>
          </div>
          <div className="pr-1">4 месяца назад | 1 минута чтения</div>
        </div>
        <div className="article-short-content-wrapper flex flex-col sm:flex-row justify-between">
          <div>
            <div className="article-short-title">
              <Link href={`/posts/${post.slug}`}>
                <h1 className="text-2xl hover:underline" data-heading-tag="H1">
                  {post.title}
                </h1>
              </Link>
              {/* <h4 data-heading-tag="H4">описание модели</h4> */}
            </div>
            <Link href="/post/" className="article-short-teaser py-3 px-3 ">
              <p>{post.title}</p>
            </Link>
          </div>

          <Link href="/en/post/how-to-install-imagemagick-on-php-83">
            {/* <Image src="https://floyk-dev.s3.eu-central-1.amazonaws.com/wall_photos/thumb/7655f89ec20f369f5ece796fadff43f8.jpeg" alt="How to install ImageMagick on PHP 8.3" width={240} height={100}> */}
          </Link>
        </div>
        <div className="article-short-footer flex flex-row justify-between">
          <div>
            <Link href="/en/post/tag/php">
              <span className="text-gray-500 bg-gray-100 dark:from-slate-800 dark:hover:bg-dark-foreground rounded-full px-2 font-bold text-sm leading-loose cursor-pointer mr-2">
                PHP
              </span>
            </Link>
            <Link href="/en/post/tag/image">
              <span className="text-gray-500 bg-gray-100 dark:from-slate-800 dark:hover:bg-dark-foreground rounded-full px-2 font-bold text-sm leading-loose cursor-pointer mr-2">
                Image
              </span>
            </Link>
            <Link href="/en/post/tag/intervention-image">
              <span className="text-gray-500 bg-gray-100 dark:from-slate-800 dark:hover:bg-dark-foreground rounded-full px-2 font-bold text-sm leading-loose cursor-pointer mr-2">
                Intervention Image
              </span>
            </Link>
            <Link href="/en/post/tag/imagick">
              <span className="text-gray-500 bg-gray-100 dark:from-slate-800 dark:hover:bg-dark-foreground rounded-full px-2 font-bold text-sm leading-loose cursor-pointer mr-2">
                Imagick
              </span>
            </Link>
            <Link href="/en/post/tag/imagemagick">
              <span className="text-gray-500 bg-gray-100 dark:from-slate-800 dark:hover:bg-dark-foreground rounded-full px-2 font-bold text-sm leading-loose cursor-pointer mr-2">
                ImageMagick
              </span>
            </Link>
          </div>
          <div className="text-sm flex flex-row opacity-50">
            <div className="text-sm mr-1">Просмотры: </div>
            <div>382</div>
          </div>
        </div>
      </div>
    </>
  );
}
