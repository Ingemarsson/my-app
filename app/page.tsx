import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-xl font-semibold drop-shadow-2xl">Auth</h1>
        <p>Simple auth</p>
        <LoginButton mode="redirect">
          <Button size="lg">Sign In</Button>
        </LoginButton>
      </div>
    </main>
  );
}
