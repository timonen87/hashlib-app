import { Prisma } from "@prisma/client";
export type UserId = string;
export type Role = "ADMIN" | "USER";

export const ROLES: Record<Role, Role> = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export function getUserDataSelect(userId: string) {
  return {
    id: true,
    name: true,
    bio: true,
    email: true,
    image: true,
    createdAt:true,
    followers: {
      where: {
        followerId: userId,
      },
      select: {
        followerId: true,
      },
    },
    _count: {
      select: {
        posts: true,
        followers: true,
      },
    },

  } satisfies Prisma.UserSelect;
}

export type UserData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getUserDataSelect>
}>





export type UserEntity = {
  id: UserId;
  email: string;
  role: Role;
  emailVerified?: Date | null;
  name?: string | null;
  image?: string | null;
};

export type SessionEntity = {
  user: {
    id: UserId;
    email: string;
    bio: string
    role: Role;
    name?: string | null;
    image?: string | null;
  };
  expires: string;
};

export type Profile = {
  id: UserId;
  email: string;
  name?: string | null;
  image?: string | null;
};
