"use client";

import Link from "next/link";
import React from "react";
import Header from "~/components/welcome/header";
import { cn } from "~/lib/utils";

export default function BackgroundBoxesPreview() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen justify-center">
        <div className="py-20">
          <div className="flex px-10">
            <h1 className="inline-block bg-gradient-to-b from-neutral-200 via-zinc-300 to-stone-300 bg-clip-text text-4xl font-bold text-transparent shadow-lg">
              A Better Way to Track Your Time.
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
