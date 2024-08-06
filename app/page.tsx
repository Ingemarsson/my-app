import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { AvatarIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <AvatarIcon className="w-10 h-10 m-auto"></AvatarIcon>
        <LoginButton asChild>
          <Button size="lg">Войти</Button>
        </LoginButton>
      </div>
    </main>
  );
}
