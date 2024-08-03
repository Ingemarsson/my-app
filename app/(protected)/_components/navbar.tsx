"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-slate-400 py-10 shadow-md">
      <div className="flex gap-x-2">
        <Button asChild>
          <Link href="/settings">SettingsPage</Link>
        </Button>
      </div>
      <p>User Button</p>
    </nav>
  );
};
