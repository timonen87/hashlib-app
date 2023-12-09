"use server";
import { revalidatePath } from "next/cache";
import { productsRepository } from "./products.repository";

export const createProducntAction = async (
  command: CreateProductListElementCommand,
  revalidatePagePath: string
) => {
  await productsRepository.createProductElement(command);
  revalidatePath(revalidatePagePath);
};
