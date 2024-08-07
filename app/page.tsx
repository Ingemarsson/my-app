import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-end mx-5 my-3">
      <div className="space-y-6 text-center">
        <LoginButton asChild>
          <Button size="lg">Войти</Button>
        </LoginButton>
      </div>
    </main>
  );
}
