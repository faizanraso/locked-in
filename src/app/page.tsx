"use client";

import Link from "next/link";
import React from "react";
import Header from "~/components/landing-page/header";
import { cn } from "~/lib/utils";

export default function BackgroundBoxesPreview() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center">
        <div className="py-28">
          <div className="flex px-10">
            <h1 className="inline-block bg-gradient-to-b from-neutral-200 via-zinc-300 to-stone-500 bg-clip-text text-center text-4xl font-bold text-transparent">
              A Better Way to Track Your Time.
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
