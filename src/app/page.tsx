"use client";

import React from "react";
import { BackgroundSVG } from "~/components/welcome/BackgroundBeams";

export default function BackgroundBoxesPreview() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-neutral-950 antialiased">
      <div className="mx-auto max-w-2xl p-4">
        <div className="flex flex-row items-center justify-center gap-x-3 text-center">
          <h1 className="relative z-10 text-center text-4xl font-bold text-neutral-400 md:text-7xl">
            Locked In 🔒
          </h1>
        </div>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          track the time you stay "locked in"
        </p>
      </div>
      <BackgroundSVG />
    </div>
  );
}
