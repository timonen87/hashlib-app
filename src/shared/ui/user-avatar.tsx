
import { ProfileAvatar, getProfileDisplayName } from "@/entities/user/profile";
import { useAppSession } from "@/entities/user/session";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

export const UserAvatar = () => {
  const session = useAppSession();

  const user = session?.data?.user;

  return (
    <Avatar className="h-8 w-8">
      <ProfileAvatar profile={user} className="w-8 h-8" />
      <AvatarFallback>
        {user?.name?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};
