"use server";
import { z } from "zod";
import { profileSchema } from "@/entities/user/profile";
import { userRepository } from "@/entities/user/_repositories/user";
import { getAuthorUseCase } from "../_use_cases/get-author";


const propsSchema = z.object({
  authorId: z.string(),
});

const resultSchema = z.object({
  profile: profileSchema,
});

export const getAuthorProfileAction = async (
  props: z.infer<typeof propsSchema>,
) => {
  const { authorId } = propsSchema.parse(props);

  const author = await getAuthorUseCase.exec({
    authorId
  })


  console.log(author)

  return author;
};
