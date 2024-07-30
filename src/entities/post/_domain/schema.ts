import { z } from "zod";

export const postDetailSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  userId: z.string(),
});
