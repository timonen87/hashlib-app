// import { LandingNavbar } from "@/widgets/app-header/landing-navbar";
import Link from "next/link";
import { CreatePostForm } from "@/features/posts-list/pub/create-post-form";
import { PostsList } from "@/features/posts-list/pub/posts-list";
import {
  ActivityLogIcon,
  TokensIcon,
  GridIcon,
  CalendarIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";
import { buttonVariantsLink } from "@/shared/ui/button-menu";
// import { usePathname } from "next/navigation";
import leftMenuButton from "@/shared/ui/left-menu-nav";
import { Leanding } from "@/widgets/leanding/leanding";

const menu = [
  { text: " Популярное", icon: <GridIcon />, path: "/" },
  { text: " Моя лента", icon: <TokensIcon />, path: "/" },
  // { text: "Все", icon: <ActivityLogIcon />, path: "/all" },
  { text: "Закладки", icon: <CalendarIcon />, path: "/bookmarks" },
  { text: "Подписки", icon: <ChatBubbleIcon />, path: "/follows" },
];

export default async function Home() {
  // const pathname = usePathname();
  return (
    <>
    <main className="flex flex-col bg-white vertical-main-content dark:bg-black">
    <Leanding/>
    </main>
      {/* <main className="flex flex-co vertical-main-content pt-6">
        <div className="flex flex-col items-center h-full">
          <div className="leading-normal tracking-normal gradient w-full ">
            <PostsList revalidatePagePath="/" />
           <div className="p-6">
           <CreatePostForm
              revalidatePagePath="/"
              className="max-w-[300px] mb-10"
            />
           </div>
          </div>
        </div>
      </main> */}
    </>
    //  <div className="grid sm:grid-cols-1 md:gap-x-4 md:grid-cols-5 xl:grid-cols-7 py-6">
    //   <div className="hidden col-auto max-w-200 md:block">
    //     <div className="hidden col-auto md:block w-[180px]">
    //       <ul className="flex-col justify-start gap-4 mb-2">
    //         {menu.map((obj) => (
    //           <li className="mb-1 pb-2 justify-start" key={obj.path}>
    //             <Link
    //               href={obj.path}
    //               className="relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group dark:text-white "
    //             >
    //               <span className="mr-2">{obj.icon}</span>
    //               <span className="text-l"> {obj.text} </span>
    //               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
    //             </Link>

    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>

    //   <ul className="flex flex-col md:col-span-4 xl:col-span-4 space-y-6">
    //     <PostsList revalidatePagePath="/" />
    //   </ul>

    //   <div className=" hidden flex-col gap-4 xl:block col-span-2">
    //     <div className=" mb-4">
    //       {" "}
    //       <CreatePostForm
    //         revalidatePagePath="/"
    //         className="max-w-[300px] mb-10"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
