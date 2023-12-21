import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export default function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        "flex items-center justify-between border-b border-zinc-800 px-10 py-4 lg:space-x-6",
        className,
      )}
      {...props}
    >
      <div className="">
        <Link href="/">
          <h1 className="font-mono text-lg font-semibold">🔒 locked-in</h1>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-2">
        <Link href={"https://github.com/faizanraso/locked-in"}>
          <div className="flex rounded-lg p-2 hover:bg-neutral-800">
            <Icons.gitHub className="h-6" />
          </div>
        </Link>
        <Link href={"/login"}>
          {" "}
          <Button
            size={"sm"}
            className="bg-neutral-200 text-black hover:bg-neutral-400"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
}
