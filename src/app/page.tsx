"use client";

import React from "react";
import BoxesContainer from "~/components/welcome/BoxesContainer";
import { twMerge } from "tailwind-merge";

export default function BackgroundBoxesPreview() {
  return (
    <div className="min-h-screen relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-black [mask-image:radial-gradient(transparent,white)]" />

      <BoxesContainer />
      <h1
        className={twMerge(
          "relative z-20 !m-0 !p-0 text-xl text-white md:text-4xl",
        )}
      >
        Tailwind is Awesome
      </h1>
      <p className="relative z-20 mt-2 text-center text-neutral-300">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
