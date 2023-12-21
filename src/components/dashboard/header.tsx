import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

export default function Header() {
  const currentPage: string = "dashboard";

  return (
    <header className="flex items-center justify-between border-b border-neutral-800 px-10 py-4 lg:space-x-6">
      <div className="">
        <nav className={cn("flex items-center space-x-4 lg:space-x-6")}>
          <Link
            href="/dashboard"
            className={cn(
              "text-sm font-medium transition-colors",
              currentPage === "dashboard"
                ? "text-blue-500"
                : "text-muted-foreground hover:text-neutral-100",
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/lock-in"
            className={cn(
              "text-sm font-medium transition-colors",
              currentPage === "lock-in"
                ? "text-blue-500"
                : "text-muted-foreground hover:text-neutral-100",
            )}
          >
            Lock-In
          </Link>
          <Link
            href="/settings"
            className={cn(
              "text-sm font-medium transition-colors",
              currentPage === "settings"
                ? "text-blue-500"
                : "text-muted-foreground hover:text-neutral-100",
            )}
          >
            Settings
          </Link>
        </nav>
      </div>
    </header>
  );
}
