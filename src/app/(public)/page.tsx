

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

const menu = [
  { text: " Главная", icon: <GridIcon />, path: "/" },
  { text: " Моя лента", icon: <TokensIcon />, path: "/" },
  { text: "Все", icon: <ActivityLogIcon />, path: "/all" },
  { text: "Закладки", icon: <CalendarIcon />, path: "/bookmarks" },
  { text: "Подписки", icon: <ChatBubbleIcon />, path: "/follows" },
];

export default async function Home() {
  // const pathname = usePathname();
  return (
    <div className="grid sm:grid-cols-1 md:gap-x-4 md:grid-cols-5 xl:grid-cols-7 py-6">
      <div className="hidden col-auto max-w-200 md:block">
        <div className="hidden col-auto md:block w-[150px]">
          <ul className="flex-col justify-start gap-4 mb-2">
            {menu.map((obj) => (
              <li className="mb-1 pb-2 justify-start" key={obj.path}>
                {/* <Link className={buttonVariants({variant:{router.asPath === obj.path ? 'subtle' : 'text'}})}></Link> */}

                <Link
                  href={obj.path}
                  className={buttonVariantsLink({
                    variant: "subtle",
                  })}
                >
                  <div className="mr-2">{obj.icon}</div>
                  <div className="text-sm"> {obj.text} </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Left Block */}
      </div>

      <ul className="flex flex-col md:col-span-4 xl:col-span-4 space-y-6">
        <PostsList revalidatePagePath="/" />
      </ul>

      <div className=" hidden flex-col gap-4 xl:block col-span-2">
        <div className=" mb-4">
          {" "}
          <CreatePostForm
            revalidatePagePath="/"
            className="max-w-[300px] mb-10"
          />
        </div>
      </div>
    </div>
  );
}
