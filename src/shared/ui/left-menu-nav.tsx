"use client";
import {
  ActivityLogIcon,
  TokensIcon,
  GridIcon,
  CalendarIcon,
  ChatBubbleIcon,

} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menu = [
  // { text: ' Главная', icon: <GridIcon />, path: '/' },
  { text: " Моя лента", icon: <TokensIcon />, path: "/" },
  { text: "Все", icon: <ActivityLogIcon />, path: "/all" },
  { text: "Закладки", icon: <CalendarIcon />, path: "/bookmarks" },
  { text: "Подписки", icon: <ChatBubbleIcon />, path: "/follows" },
];

const leftMenuButton = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden col-auto md:block w-[180px]">
        <ul className="flex-col justify-start gap-4 mb-2">
          {menu.map((obj) => (
            <li className="mb-1 pb-2 justify-start" key={obj.path}>
              <Link
                href={obj.path}
                className="relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group dark:text-white "
              >
                <span className="mr-2">{obj.icon}</span>
                <span className="text-sm"> {obj.text} </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default leftMenuButton;
