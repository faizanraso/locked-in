"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "~/components/ui/button";
import { BackgroundSVG } from "~/components/welcome/BackgroundBeams";
import { cn } from "~/lib/utils";

export default function BackgroundBoxesPreview() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-neutral-950 antialiased">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "hover" }),
          "absolute right-4 top-4 z-10 md:right-8 md:top-8 border border-neutral-400 hover:bg-neutral-300",
        )}
      >
        Get Started
      </Link>
      <div className="mx-auto max-w-2xl p-4">
        <div className="flex flex-row items-center justify-center gap-x-3 text-center">
          <h1 className="relative z-10 text-center text-3xl font-bold text-neutral-400 sm:text-5xl md:text-7xl">
            Locked In 🔒
          </h1>
        </div>
        <p className="text-md relative z-10 mx-auto my-2 max-w-lg text-center font-semibold text-neutral-500">
          a better way to track your time
        </p>
      </div>
      <BackgroundSVG />
    </div>
  );
}
