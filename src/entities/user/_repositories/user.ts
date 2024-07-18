import { dbClient } from "@/shared/lib/db";
import { Profile,  UserEntity, UserId } from "../_domain/types";

export class UserRepository {
  async getUserById(userId: UserId): Promise<UserEntity> {
    return dbClient.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });
  }

  async getAuthorById(userId: UserId): Promise<Profile>  {
    return dbClient.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });
  }

  async createUser(user: UserEntity): Promise<UserEntity> {
    return await dbClient.user.create({
      data: user,
    });
  }
}


export const userRepository = new UserRepository();
