import { LogoIcon } from "@/shared/ui/logo-icon";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      {/* <LogoIcon className="h-6 w-6" /> */}
      <Image  src="/logo.png" width={50} height={30} alt='Getspy.ru'/>
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
      {/* <span className="text-3xl font-bold inline-block">wiki</span> */}
    </Link>
  );
}
