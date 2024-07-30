import { getUserDataSelect } from "@/entities/user/_domain/types";
import { dbClient } from "@/shared/lib/db";
import { notFound } from "next/navigation";
import { cache } from "react";

const getUser = cache(async (name: string, userId: string) => {
  const user = await dbClient.user.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
    select: getUserDataSelect(userId),
  });

  if (!user) {
    notFound();
  }
  return user;
});

export default getUser
