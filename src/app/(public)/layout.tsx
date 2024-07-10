import { ThemeProvider } from "@/features/theme/theme-provider";
import { AppHeader } from "@/widgets/app-header/app-header";

export const metadata = {
  title: 'GetSpy.ru ',
  description: 'В помощь разработчику',
};


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider />
      <AppHeader variant="public" />
      <div className="container  max-w-7xl mx-auto pt-0 min-h-[100vh]">
      {children}
      </div>
    </>
  );
}
