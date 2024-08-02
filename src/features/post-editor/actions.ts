"use server";

import { getPostDataInclude } from "@/entities/post/_domain/types";
import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { dbClient } from "@/shared/lib/db";
import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const createPostSchema = z.object({
    content: requiredString,
    mediaIds: z.array(z.string()).max(5, "Cannot have more than 5 attachments"),
  });

export async function submitPost(input: {
  content: string;
  mediaIds: string[];
}) {
  const { user } = await getAppSessionStrictServer()

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  const newPost = await dbClient.post.create({
    data: {
      content,
      userId: user.id,
      attachments: {
        connect: mediaIds.map((id) => ({ id })),
      },
    },
    include: getPostDataInclude(user.id),
  });

  return newPost;
}
