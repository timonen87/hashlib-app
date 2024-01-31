import { CreatePostForm } from "@/features/posts-list/pub/create-post-form";
import { PostsList } from "@/features/posts-list/pub/posts-list";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8">
      <h1 className="text-3xl mb-2">Посты</h1>
      <CreatePostForm revalidatePagePath="/" className="max-w-[300px] mb-10" />
      <PostsList revalidatePagePath="/" />
    </main>
  );
}
