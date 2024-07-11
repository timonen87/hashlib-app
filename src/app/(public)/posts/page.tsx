import { UpdateProfileForm } from "@/features/update-profile/update-profile-form";
import { Separator } from "@/shared/ui/separator";
import { Skeleton } from "@/shared/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { PostsList } from "@/features/posts-list/pub/posts-list";
import { PostItemV2 } from "@/features/posts-list/ui/post-item-v2";
import { PostsListV2 } from "@/features/posts-list/pub/posts-list-v2";

export default function PostsPage({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col vertical-main-content dark:bg-slate-800  pt-6 pr-6">
      <div  className="flex flex-col w-full">
      <PostsListV2 revalidatePagePath="/" />


        </div>
    </main>

  );
}
