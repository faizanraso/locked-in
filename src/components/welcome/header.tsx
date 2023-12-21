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
        "flex items-center justify-between border-b border-neutral-800 px-10 py-4 lg:space-x-6",
        className,
      )}
      {...props}
    >
      <div className="">
        <Link href="/">
          <h1 className="text-xl font-semibold text-neutral-200">
            🔒 <span className="italic">locked-in</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-2">
        <Link href={"https://github.com/faizanraso/locked-in"}>
          <Button className="flex gap-x-2 rounded-lg border border-neutral-800 bg-black p-2 hover:bg-neutral-800">
            <Icons.gitHub className="h-6" />
          </Button>
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
