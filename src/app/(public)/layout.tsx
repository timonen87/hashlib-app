import { ThemeProvider } from "@/features/theme/theme-provider";
import { AppHeader } from "@/widgets/app-header/app-header";
import { LandingContent } from "@/widgets/app-header/landing-content";
import { LandingHero } from "@/widgets/app-header/landing-hero";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <ThemeProvider />
      <AppHeader variant="public" />
      <LandingHero />
      <LandingContent />
      
    </>
  );
}
