import { getUserDataSelect } from "@/entities/user/_domain/types";

import { Prisma } from "@prisma/client";
import { Post, User } from "@prisma/client";

export function getPostDataInclude(userId: string) {
  return {
    user: {
      select: getUserDataSelect(userId),
    },
    attachments: true,
  } satisfies Prisma.PostInclude;
}

export type PostData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getPostDataInclude>;
}>;

export function getPostDataSelect(slug: string) {
  return {
    id: true,
    title: true,
    slug: true,
    content: true,
    createdAt: true,
  } satisfies Prisma.PostSelect;
}

export interface PostsPage {
  posts: PostData[];
  nextCursor: string | null;
}

type PostListCategory = {
  id: string;
  name: string;
  image: string | null;
  slug: string;
};

export type PostListElement = {
  id: string;
  title: string;
  content: any;
  author: Profile;
  category: PostListCategory;
  slug: string;
};

export type Profile = {
  email: string;
  name?: string | null;
  image?: string | null;
};

export type CreatePostListElementCommand = {
  id: string;
  title: string;
  slug: string;
  content: any;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  categoryId: string;
  published: boolean;
};

type DeletePostListElementCommand = {
  id: string;
};
