import { ThemeProvider } from "@/features/theme/theme-provider";
import { AppHeader } from "@/widgets/app-header/app-header";
import { Footer } from "@/widgets/leanding/footer";
import { VerticalHeader } from "@/widgets/vertical-header/vertical-header";

export const metadata = {
  title: "GetSpy.ru ",
  description: "В помощь разработчику",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider />
      <div className="vertical-main-wrapper dark:bg-slate-800 ">
        <div className="vertical-main-sidebar">
          <VerticalHeader variant="public" />
        </div>
        <div className=" mx-auto pt-0 min-h-[100vh]  sm:w-10/12 inset-x-0 bg-slate-50 dark:bg-slate-800 ">
          <main className="flex flex-col bg-slate-50 vertical-main-content dark:bg-slate-800 h-full">
            {children}
            <Footer />

          </main>

        </div>
      </div>
    </>
  );
}
