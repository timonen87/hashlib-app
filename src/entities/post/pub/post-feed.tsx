import { postRepository } from "../_repositories/post";

import { revalidatePath } from "next/cache";
import { PostItem } from "../ui/post-item";
import { userRepository } from "@/entities/user/_repositories/user";
import { profileRepository } from "@/entities/user/_repositories/profile";
import { dbClient } from "@/shared/lib/db";
import { UserId } from "@/entities/user/user";
import Post from "./post";

export async function PostsFeed() {
  const postList = await postRepository.getPostList();

  console.log(postList);

  return (
    <div>
      <ul className="flex flex-col md:col-span-4 xl:col-span-4 space-y-6">
        {postList.map((post) => (
          <Post post={post} key={post.id} />
        ))}

        {/* {isFetchingNextPage && (
          <li className="flex justify-center">
            <Loader2 className="w-6 h-6 text-zinc-500 animate-spin" />
          </li>
        )} */}
      </ul>
    </div>
  );
}
