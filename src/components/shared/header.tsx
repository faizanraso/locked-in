"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { UserNav } from "./usernav";

import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";

const navItems = [
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/lock-in",
    name: "Lock-In",
  },
];

export default function Header() {
  const { data: session, status } = useSession();
  const currentPage = usePathname() || "/dashboard";

  return (
    <header className="flex flex-col border-b border-neutral-800 px-7 pb-2 pt-4">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-x-3 px-1">
          <Link href="/dashboard" className="">
            <h1 className="inline text-lg">
              🔒 <span className="italic text-neutral-400">/</span>
            </h1>
          </Link>
          <div className="flex flex-row items-center justify-center gap-x-2">
            <Avatar className="h-5 w-5">
              <AvatarImage
                className="bg-gradient-to-bl from-green-400 via-sky-500 to-purple-600"
                alt="user"
              />
              <AvatarFallback className="bg-gradient-to-bl from-green-400 via-sky-500 to-purple-600"></AvatarFallback>
            </Avatar>
            <h1 className="inline text-sm text-neutral-400">
              {session?.user.name}
            </h1>
            <Badge variant="outline">Hobby</Badge>
          </div>
        </div>
        <div className="flex items-center justify-center">

          <UserNav session={session} />
        </div>
      </div>
      <div>
        <nav className={cn("flex w-full pt-2")}>
          <div className="items-center space-x-2">
            {navItems.map((page) => (
              <Link
                href={page.path}
                key={page.path}
                className={cn(
                  "rounded-lg p-2 text-sm font-medium transition-colors hover:bg-zinc-800",
                  currentPage.includes(page.path)
                    ? "text-neutral-100"
                    : "text-muted-foreground hover:text-neutral-100",
                )}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
