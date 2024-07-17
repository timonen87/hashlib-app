
import { UserEntity } from "@/entities/user/_domain/types";
import { userRepository } from "@/entities/user/_repositories/user";
import { UserId } from "@/entities/user/user";
import { AuthorizatoinError } from "@/shared/lib/errors";

type GetAuthor = {
  authorId: string;
};

export class GetAuthorUseCase {
  async exec({ authorId }: GetAuthor): Promise<UserEntity> {

    return await userRepository.getUserById(authorId);
  }
}

export const getAuthorUseCase = new GetAuthorUseCase();
