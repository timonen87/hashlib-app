import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/shared/ui/sheet";
import { Menu } from "lucide-react";
import { Profile } from "@/widgets/app-header/_ui/profile";
import Link from "next/link";
import { Logo } from "./logo";

export function Layout({
  logo,
  nav,
  profile,
  actions,
}: {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  profile?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-white vertical-sidebar-wrapper dark:bg-black">
        <div className="items-center nav-group nav-group-1 ">
          <div className="ml-5 mt-4 mb-6 underline sm:ml-0 ">
            <Logo />
          </div>
          <div>
            <Link
              className="inline-flex items-center px-1 pt-1 border-transparent text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition mb-3"
              href="/wall"
            >
              <span className="text-xs font-bold">Лента</span>
            </Link>
          </div>
          <div className="flex flex-row items-center sm:flex-col ">
            <Link
              className="inline-flex items-center px-1 pt-1 border-transparent text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition mb-3"
              href="/post"
            >
              <span className="text-xs font-bold">Посты</span>
            </Link>
          </div>
        </div>

        <div className="hidden md:block  ">
          <Link
            className="inline-flex items-center px-1 pt-1 border-transparent text-sm font-medium leading-5 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition flex flex-col text-2xl rounded-full"
            href="/app/new/post"
          >
            <div className=" ml-6 pb-6 h-8 w-8">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z"
                ></path>
              </svg>
            </div>

            <div className="text-xs font-bold ">Добавить</div>
          </Link>
        </div>

        <div className="nav-group nav-group-3">
          <div className="flex items-center justify-center gap-2 sm:flex-col">
            <div className=" cursor-pointer">{actions}</div>
            <div className="nav-profile-wrapper">{profile}</div>
          </div>
        </div>
      </div>
    </>
  );
}
