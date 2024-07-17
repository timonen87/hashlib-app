"use client";
import { Button } from "@/shared/ui/button";
import { FC, useRef, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/shared/ui/card";
import { Divide, MessageSquare, Newspaper } from "lucide-react";
import { useTransition } from "react";
import {
  getProfileDisplayName,
  Profile,
  ProfileAvatar,
} from "@/entities/user/profile";
import { useAppSession } from "@/entities/user/session";
import { Skeleton } from "@/shared/ui/skeleton";
import { PostListElement } from "../_domain/types";

import { profileRepository } from "@/entities/user/_repositories/profile";
import { userRepository } from "@/entities/user/_repositories/user";
import { ProfileAuthor } from "./profile-author";

export function PostItem({
  post,
}: {
  post: PostListElement;
}) {
  const pRef = useRef<HTMLParagraphElement>(null);

  // const session = useAppSession();

  // if (session.status === "loading") {
  //   return "";
  // }
  // if (session.status === "unauthenticated") {
  //   return "";
  // }

  // const user = session.data?.user;

  // console.log(user);

  return (
    <>
      <div className="p-6 flex flex-col relative md:px-5 w-full mt-4 py-4 bg-white dark:bg-gray-700 shadow rounded-lg">
        <div className="hidden flex items-center justify-center loading-status bg-white dark:bg-dark-background opacity-75 w-full absolute border-r">
          <div className="w-4 h-4 border-l-2 border-gray-500 rounded-full animate-spin"></div>
        </div>
        <div className="article-short-user-data flex flex-col sm:flex-row">
          <div className="flex flex-row gap-2">
            <ProfileAuthor profile={post.author} className="w-8 h-8" />

            <div className="pr-1">
              <Link className="hover:underline" href={`/profile/${post.author.id}`}>
                {post.author ? getProfileDisplayName(post.author) : ""}
              </Link>
            </div>
          </div>
          <div className="pr-1">
            <div className="pr-1">
              в{" "}
              <Link
                className="hover:underline"
                href={`/post/${post.category.slug}`}
              >
                Python
              </Link>
            </div>
          </div>
          <div className="pr-1">4 месяца назад | 1 минута чтения</div>
        </div>
        <div className="article-short-content-wrapper flex flex-col sm:flex-row justify-between">
          <div>
            <div className="article-short-title">
              <Link href={`/post/${post.category.slug}/${post.slug}`}>
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
