import { PostsList } from "@/features/posts-list/pub/posts-list";
import { UpdateProfileForm } from "@/features/update-profile/update-profile-form";
import { Separator } from "@/shared/ui/separator";
import { Skeleton } from "@/shared/ui/skeleton";
import Image from "next/image";



export default function PostsPage({ params }: { params: { slug: string } }) {
  return (
    <main className="flex-auto flex-col vertical-main-content dark:bg-slate-800  pt-6 pr-6">
      <div className="flex flex-col w-full">
        <PostsList revalidatePagePath="/posts" />
      </div>
    </main>
  );
}
