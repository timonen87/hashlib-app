import { UpdateProfileForm } from "@/features/update-profile/update-profile-form";
import { Separator } from "@/shared/ui/separator";

export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    // <main className="w-full space-y-6 py-14 container max-w-[600px]">
    //   <div>
    //     <h3 className="text-lg font-medium">Профиль</h3>
    //     <p className="text-sm text-muted-foreground">
    //       Это как другие пользователи видят вас на сайте
    //     </p>
    //   </div>
    //   <Separator />F
    //   <UpdateProfileForm userId={params.id} />
    // </main>

    <main className="flex flex-col vertical-main-content dark:bg-black max-w-[600px] pt-6 pr-6">
      <div className="flex flex-col items-center h-full">
        <div className="leading-normal tracking-normal gradient w-full pl-6 ">
          <div>
            <h3 className="text-lg font-medium">Профиль</h3>
            <p className="text-sm text-muted-foreground">
              Это как другие пользователи видят вас на сайте
            </p>
          </div>
          <Separator />
          <UpdateProfileForm userId={params.id} />
        </div>
      </div>
    </main>
  );
}
