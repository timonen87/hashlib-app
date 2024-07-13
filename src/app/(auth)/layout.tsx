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
      {/* <AppHeader variant="auth" /> */}
      <div className="vertical-main-wrapper ">
        <div className=" vertical-main-sidebar ">
          <VerticalHeader variant="auth" />
        </div>

        <div className=" flex flex-col  vertical-main-content items-center h-full mx-auto pt-0 min-h-[100vh]  sm:w-10/12 dark:bg-slate-800F">
          {children}
        </div>
      </div>
    </>
  );
}
