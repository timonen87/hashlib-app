import Linkify from "@/entities/post/ui/linkify";
import { ProfileAuthor } from "@/entities/post/ui/profile-author";
import {
  getUserDataSelect,
  UserData,
  UserId,
} from "@/entities/user/_domain/types";
import { getAppSessionStrictServer } from "@/entities/user/session.server";
import getUser from "@/features/users/repository";
import UserPosts from "@/features/users/pub/user-posts";
import UserProfile from "@/features/users/pub/user-profile-public";
import { dbClient } from "@/shared/lib/db";
import { Avatar } from "@/shared/ui/avatar";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import TrendsSidebar from "@/features/users/trends-sidebar";

interface PageProps {
  params: { name: string };
}


export async function generateMetadata({
  params: { name },
}: PageProps): Promise<Metadata> {
  const session = await getAppSessionStrictServer();

  if (!session.user.id) return {};

  const user = await getUser(name, session.user.id);

  return {
    title: `${user.name} (@${user.email})`,
  };
}

export default async function Page({ params: { name } }: PageProps) {
  const session = await getAppSessionStrictServer();
  if (!session) {
    return (
      <p className="text-destructive">
        Вы не авторизовались на странице профиля
      </p>
    );
  }

  const user = await getUser(name, session.user.id);

  // console.log(user)

  return (
    <main className="flex w-full min-w-0 gap-5 mt-5">
      <div className="w-full min-w-0 space-y-5">
        <UserProfile user={user} userId={user.id} />
        <div className="rounded-2xl bg-card p-5 shadow-sm">
          <h2 className="text-center text-2xl font-bold">
            {user.name}&apos; Посты
          </h2>
        </div>
        <UserPosts userId={user.id} />
      </div>
      <TrendsSidebar />
    </main>
  );
}
