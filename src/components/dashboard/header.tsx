"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { UserNav } from "./usernav";

export default function Header() {
  const currentPage = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-neutral-800 px-10 py-4 lg:space-x-6">
      <div className="">
        <nav className={cn("flex w-full justify-between")}>
          <div className="items-center space-x-4 lg:space-x-6">
            <Link
              href="/dashboard"
              className={cn(
                "text-sm font-medium transition-colors",
                currentPage.includes("/dashboard")
                  ? "text-sky-600"
                  : "text-muted-foreground hover:text-neutral-100",
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/lock-in"
              className={cn(
                "text-sm font-medium transition-colors",
                currentPage.includes("/lock-in")
                  ? "text-sky-600"
                  : "text-muted-foreground hover:text-neutral-100",
              )}
            >
              Lock-In
            </Link>
            <Link
              href="/settings"
              className={cn(
                "text-sm font-medium transition-colors",
                currentPage.includes("/settings")
                  ? "text-sky-600"
                  : "text-muted-foreground hover:text-neutral-100",
              )}
            >
              Settings
            </Link>
          </div>
        </nav>
      </div>
      <div className="">
        <UserNav />
      </div>
    </header>
  );
}
