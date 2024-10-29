import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function AvatarUser() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export { AvatarUser };
