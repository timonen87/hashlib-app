import AuthorizedGuard from "@/features/auth/authorized-guard";
import { AppHeader } from "@/widgets/app-header/app-header";
import { VerticalHeader } from "@/widgets/vertical-header/vertical-header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      {/* <AppHeader variant="private" /> */}
      <div className="vertical-main-wrapper dark:bg-black">
      <div className=" vertical-main-sidebar dark:bg-black">
      <VerticalHeader variant="private" />

      </div>
      <div className=" flex flex-col  vertical-main-content items-center h-full mx-auto pt-0 min-h-[100vh]  sm:w-10/12 dark:bg-black">
      <AuthorizedGuard>{children}</AuthorizedGuard>
      </div></div>

    </>
  );
}
