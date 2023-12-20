import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

export default function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        "flex items-center justify-between px-10 py-4 lg:space-x-6 border-b border-zinc-800",
        className,
      )}
      {...props}
    >
      <div className="">
        <Link href="/">
          <h1 className="font-mono text-lg font-semibold">🔒 locked-in</h1>
        </Link>
      </div>
      <div></div>
    </header>
  );
}
