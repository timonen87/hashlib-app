import { getUserDataSelect, UserData } from "@/entities/user/_domain/types";
import { getAppSessionStrictServer } from "@/entities/user/session.server";
import { dbClient } from "@/shared/lib/db";
import kyInstance from "@/shared/lib/ky";

export async function LinkWithTooltip(username:string) {
    return await kyInstance.get(`/api/users/username/${username}`).json<UserData>()

}

// export async function LinkWithTooltip(username: string) {
//   const session = await getAppSessionStrictServer();

//   if (!session.user) {
//     return Response.json({ error: "Unauthorized" }, { status: 401 });
//   }
//   const user = await dbClient.user.findFirst({
//     where: {
//       username: {
//         equals: username,
//         mode: "insensitive",
//       },
//     },
//     select: getUserDataSelect(session.user.id),
//   });

//   //   const deletePost = await postRepository.deletePost({id});

//   return user;
// }
