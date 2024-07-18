import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Profile } from "../_domain/types";
import { cn } from "@/shared/ui/utils";
import { getProfileLetters } from "@/entities/user/_vm/get-profile-letters";
import { UserEntity } from "@/entities/user/_domain/types";


export const ProfileAuthor = ({
  profile,
  className,
}: {
  profile?: Profile;
  className?: string;
}) => {
  if (!profile) {
    return null;
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={profile.image ?? ""} className="object-cover" />
      <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
    </Avatar>
  );
};
