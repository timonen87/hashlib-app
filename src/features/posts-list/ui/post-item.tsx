"use client";
import { Button } from "@/shared/ui/button";
import { FC, useRef } from "react";
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
import { ProfileAvatar } from "@/entities/user/profile";
import { useAppSession } from "@/entities/user/session";
import { Skeleton } from "@/shared/ui/skeleton";

export function PostItem({
  post,
  onDelete,
}: {
  post: PostListElement;
  onDelete: () => Promise<void>;
}) {
  const session = useAppSession();
  const [isLoadingDelete, startDeleteTransition] = useTransition();
  const pRef = useRef<HTMLParagraphElement>(null);

  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete();
    });
  };

  if (session.status === "loading") {
    return "";
  }
  if (session.status === "unauthenticated") {
    return "";
  }

  const user = session?.data?.user;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{post.name}</CardTitle>
          <CardDescription>{post.description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button disabled={isLoadingDelete} onClick={handleDelete}>
            Удалить
          </Button>
        </CardFooter>
      </Card>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm ">
        <div className="px-2 py-4 flex justify-between">
          <div className="w-0 flex-1">
            {/* <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="flex flex-col items-start gap-0 ml-2">
                  <div className="flex items-center gap-2 pl-6">
                    <ProfileAvatar profile={user} className="w-8 h-8" />
                    <span>{user?.name}</span>
                    <span className="text-xs">
                      {formatTimeToNow(new Date(post.createdAt))}
                    </span>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-col space-y-1.5 pl-2 pt-2">
              <h3
                className="text-2xl font-semibold leading-none tracking-tight pb-2"
                data-heading-tag="H3"
              >
                {post.name}
              </h3>
              <div
                className="relative text-sm max-h-40 w-full overflow-clip"
                ref={pRef}
              >
                {/* <EditorOutput content={post.content} /> */}
                <p>{post.description}</p>
                {pRef.current?.clientHeight === 200 ? (
                  // blur bottom if content is too long
                  <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent dark:from-black"></div>
                ) : (
                  <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent dark:from-black"></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-0 pl-2 pr-2">
          {/* <Link
              href={`/category/`}
              className="w-fit flex items-center gap-2 pl-2"
            >
              <MessageSquare className="h-4 w-4 " /> 25 min read
            </Link> */}
          <div className="flex items-center gap-2 pl-2">
            <ProfileAvatar profile={user} className="w-8 h-8" />
            <span>{user?.name}</span>
            <span className="text-xs">
              {/* {formatTimeToNow(new Date(post.createdAt))} */}
            </span>
          </div>

          <div className="flex items-center gap-2 py-4">
            <Newspaper className="h-4 w-4 mr-1" />

            <>
              <Link href={`/cat/`}>Python</Link>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
