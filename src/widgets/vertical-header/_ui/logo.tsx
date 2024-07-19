import { LogoIcon } from "@/shared/ui/logo-icon";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex flex-col items-center space-x-2 " href="/">
      {/* <LogoIcon className="h-6 w-6" /> */}
      <Image src="/logo.png" width={50} height={30} alt="Devpools.ru" />
      {/* <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        pools
      </div> */}
    </Link>
  );
}
